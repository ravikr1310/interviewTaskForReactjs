function Modal(props){
    console.log(props)
    return(
        <div className="modal">
            <h4>User Name: {props}</h4>
            <h6>User Email Id: ravi@gmail.com</h6>
        </div>
    )
}

export default Modal;