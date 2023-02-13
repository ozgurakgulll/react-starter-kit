import classNames from "classnames";

function Button({children,variant='default'}){

    return(<button className={classNames({
        "p-4 h-100 flex items-center rounded":true,
        "bg-gray-100":variant==='default',
        "bg-green-600 text-white":variant==='success',
        "bg-red-600 text-white":variant==='danger',

    })}>{children}</button>)
}
export default Button
