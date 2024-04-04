import './Menu.css'

function Menu(props){
    return <div className="menu">
                <div className="menu-title">{props.title}</div>
                <div className='menu-contents'>{props.content}</div>
            </div>

}

export default Menu;