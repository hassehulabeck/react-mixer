import styles from './StudentList.module.css'

export function StudentList({children}) {
    return (
        <div className="studentList">
            <h1 className={styles.h1}>Studentlist</h1>
            <div>
                { children }
            </div>
        </div>
    )
}