import React from 'react'
import styles from  './GetDateMonth.module.css'

const GetDateMonth = ({ datetime }) => {
    let date = datetime.slice(8, 10)
    let month = datetime.slice(5, 7)

    return (
        <div>
            <div className={styles.dateNum}>{date}</div>
            <div className={styles.month}>
                {(() => {
                    switch (month) {
                        case '01':
                            return 'January'
                        case '02':
                            return 'February'
                        case '03':
                            return 'March'
                        case '04':
                            return 'April'
                        case '05':
                            return 'May'
                        case '06':
                            return 'June'
                        case '07':
                            return 'July'
                        case '08':
                            return 'August'
                        case '9':
                            return 'September'
                        case '10':
                            return 'October'
                        case '11':
                            return 'November'
                        case '12':
                            return 'December'
                    }
                })()}
            </div>
        </div>
    )
}
export default GetDateMonth
