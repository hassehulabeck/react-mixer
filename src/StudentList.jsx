import styles from './StudentList.module.css'

export function StudentList({children}) {
    return (
        <div className="studentList">
            <h1 className={styles.h1}>Studentlist</h1>
            <div className="border-8">
                <p className={ [styles.underl, styles.fat].join(" ") }>Hello</p>
                { children }
            </div>
        </div>
    )
}