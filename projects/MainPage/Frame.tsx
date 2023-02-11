import style from "../../styles/Home.module.css"

type TFrame = { children: any, label: string }

const Frame = ({ children, label }: TFrame) => {

    return (
        <div className={style.frame_group}>
        <div className={style.frame_outer}>
          <div className={style.frame_inner}>
            { children }
          </div>
        </div>
            <label className={style.frame_label_bottom} >
                { label }
            </label>
        </div>
    )
}


export default Frame