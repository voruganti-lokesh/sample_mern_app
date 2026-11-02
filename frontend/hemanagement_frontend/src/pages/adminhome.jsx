function AdminHome() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    return (
        <div>
            <h1>welcome {currentUser.name}</h1>

        </div>)
}
export default AdminHome