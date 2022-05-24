import React from 'react';
import s from "./profileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.picture}
                    src="https://images.pexels.com/photos/6801929/pexels-photo-6801929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            </div>

        </div>
    );
};

export default ProfileInfo;