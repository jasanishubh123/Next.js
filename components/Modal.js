const Modal = (props) => {

    let CloseModal=null
    const SubmitModal=()=>{
        alert("Submit Modal")
        CloseModal.click()
    }

    return (
        <>
            {
                !props.hsEdit &&
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create Movie
                </button>
            }
           
            <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={ele=>CloseModal=ele} className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {
                                props.hasSubmit &&
                                <button type="button" onClick={SubmitModal} className="btn btn-primary">Save changes</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Modal;