import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const ReviewCollection = () => {
    const {user} = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/${user.uid}/reviews`)
        .then(res=>res.json())
        .then(data=> setUserReviews(data))
    },[user])
    return (
        <div>
            <h2 className='text-3xl font-semibold mb-5'>My Reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Restaurant Name</th>
                        <th>Review</th>
                        <th>Reviewer</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {userReviews.map(userRev=> 
                        <tr key={userRev._id}>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="w-12 h-12">
                                <img src={userRev?.serviceImgURL} alt="ServiceImage" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{userRev?.serviceTitle}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {userRev?.details}
                        </td>
                        <td><b>{userRev?.userName}</b></td>
                        </tr>
                    )
                        }
                    
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewCollection;