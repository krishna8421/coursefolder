import styles from '../styles/Admin.module.scss'
import NavBar from '../components/NavBar'


export default function Admin() {
        const fetchURL = "/api/server/postUrl"
        const addUrl = async event => {
            const url = event.target.url.value
            event.preventDefault()
            const res = await fetch(fetchURL,
                {
                    body: JSON.stringify({
                        url: url
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST'
                }
                )
                const result = await res.json()
                if(result.status==="Url Added"){
                    document.getElementById("status").innerHTML = "Sucess ✅";
                }else{
                    document.getElementById("status").innerHTML = "Failed ❌";
                }
        }

    return (
        <div className={styles.main}>
            <NavBar />

            <form className={styles.form} onSubmit={addUrl}>
                <input id="url" type="text" placeholder="Enter Url"/>
                <button type="submit">Add</button>
            </form>

            <div id="status" className={styles.status}>
                
            </div>
        </div>
    )}
