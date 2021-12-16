import React, {useState} from 'react';

function Prompt({todos}) {

    return(
        <div>
            <div className={todos.length===0 ? "shown" : "invisible"}>
                <img src="https://yizhuo-liang.github.io/resources/pictures/happyliang.png" className='liang' />
                <div className="prompt">
                    Hi, I'm Coulittleson. Type in some todos! <br />
                    For more info, click <a href="https://github.com/Yizhuo-Liang/react-todo-app/blob/master/README.md"> here</a>.
                </div>
            </div>

            <div className={todos.length===2 ? "shown" : "invisible"}>
                <img src="https://yizhuo-liang.github.io/resources/pictures/happyliang.png" className='liang' />
                <p className="prompt"> You can delete todos by the garbage button! </p>
            </div>

            <div className={todos.length===10 ? "shown" : "invisible"}>
                <img src="https://yizhuo-liang.github.io/resources/pictures/angerliang.png" className='liang' />
                <p className="prompt"> Too much todos! </p>
            </div>
        </div>
    )
}

export default Prompt