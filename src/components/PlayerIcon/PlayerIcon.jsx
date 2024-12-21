import React from 'react'
import './PlayerIcon.css'

const PlayerIcon = ({
    index,
    isActive

}
) => {
return (
    <div>
        <div id="image">
            <img className={isActive?"isActive":"isNotActive"} src={`/public/Images/Icon-${index}.webp`} alt="" />
        </div>

    </div>
)
}

export default PlayerIcon