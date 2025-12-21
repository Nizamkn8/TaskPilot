import React from "react";
import { useDispatch } from "react-redux";
import {
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";
import { reorderTasks } from "./taskSlice";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const TodoList = ({ tasks, onDelete, onToggle }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updated = reorder(
      tasks,
      result.source.index,
      result.destination.index
    );

    dispatch(reorderTasks(updated));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks-droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="mt-8 space-y-4"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`rounded-xl border bg-white p-5 shadow-sm transition
                      ${
                        snapshot.isDragging
                          ? "border-blue-300 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:shadow-md"
                      }
                    `}
                  >
                    {/* Task Content */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                      {/* Left Section */}
                      <div className="space-y-1">
                        <h3
                          className={`text-base font-semibold ${
                            task.isCompleted
                              ? "line-through text-gray-400"
                              : "text-gray-800"
                          }`}
                        >
                          {task.title}
                        </h3>

                        {task.description && (
                          <p
                            className={`text-sm ${
                              task.isCompleted
                                ? "line-through text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            {task.description}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                            Priority: {task.priority}
                          </span>

                          {task.deadline && (
                            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                              Deadline: {task.deadline}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right Actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onToggle(task.id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition"
                          title="Mark complete"
                        >
                          ✓
                        </button>

                        <button
                          onClick={() => onDelete(task.id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition"
                          title="Delete task"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
