"use client";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "next/navigation";
import * as client from "../../client";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModuleControls from "./ModulesControls";
import { useEffect, useState } from "react";
import {
  editModule,
  updateModule,
  setModules,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const mod = await client.createModuleForCourse(cid, newModule);
    dispatch(setModules([...modules, mod]));
    setModuleName("");
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) =>
      m._id === module._id ? module : m,
    );
    dispatch(setModules(newModules));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <>
      <div>
        <ModuleControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={onCreateModuleForCourse}
        />
        <br />
        <br />
        <br />
        <ListGroup className="rounded-0" id="wd-modules">
          {modules.map((module: any, index: number) => (
            <ListGroupItem
              key={index}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl
                    className="w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value }),
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        onUpdateModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />{" "}
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any, index: number) => (
                    <ListGroupItem key={index} className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />{" "}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </>
  );
}
