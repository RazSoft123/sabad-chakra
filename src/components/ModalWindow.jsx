export default function ModalWindow({children, visibility, childModal}) {
    return (
        <div id="modalWindow" className={`w-full h-full bg-gray-200/50 backdrop-blur-sm z-30 absolute top-0 bottom-0 left-0 right-0 ${visibility ? "block" : "hidden"}`}>
            <div className="w-full h-full border-2 flex items-center justify-center">
                {childModal && childModal}
                {children}
            </div>
        </div>
    );
}