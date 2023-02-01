function Todo(props) {

    
    return (
        <>
            <div className="tostyle">
                <i className="fa fa-times" aria-hidden="true"
                    onClick={()=>{
                        props.onSelect(props.id);
                    }}
                />
                <li>{props.cur}</li>
            </div>
        </>
    );
}

export default Todo;