import React, { useState, useEffect } from 'react'
import HOC from './HOC'

const UsersList = ({ data }) => {

 

    // function to render users

    const renderUsers = data.map((user) => {
        return (
            <div key={user.id}>
                <p>{user.name}</p>
            </div>
        )
    })

    // function withs serach

    // let filteredUSers = users.filter(({ name }) => {
    //     return name.indexOf(term) >= 0;
    // })
    //     .map((user) => {
    //         return (
    //             <div key={user.id}>
    //                 <p>{user.name}</p>
    //             </div>
    //         )
    //     })




    return (
        <div>
            <div>
                {renderUsers}
            </div>
        </div>

    )
}

const SearchUsers = HOC(UsersList,"users");


export default SearchUsers;