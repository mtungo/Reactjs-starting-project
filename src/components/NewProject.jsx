import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
    const modalRef = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation ...
        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            modalRef.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
        <Modal className="text-xl font-bold text-stone-500 my-4" ref={modalRef} buttonCaption="Okay">
            <h2>Invalid Input</h2>
            <p className="text-stone-600 mb-4 mt-2">Oops... looks like you missed something!</p>
            <p className="text-stone-600 mb-2">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>Save</button>
                </li>
            </menu>
            <div>
                <Input type="text" label="Title" ref={title} />
                <Input label="Description" textarea ref={description} />
                <Input type="date" label="Due date" ref={dueDate} />
            </div>
        </div>
        </>
    )
}