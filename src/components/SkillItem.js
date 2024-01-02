import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillIconsList } from '../assets/info';

const SkillItem = ({ skillSet, skillType, id }) => {

    return (
        <div className='skill-section' id={id}>
            <p className='skill-title'>{skillType}</p>
            <div className='skill-list'>
                {
                    skillSet && skillSet[skillType]?.map((skill) => {
                        return (
                            <div className='skill-set'>
                                <FontAwesomeIcon className="skill-icon" icon={skillIconsList[skill] || skillIconsList['default']} />
                                <p className="skill-name">{skill}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default SkillItem;