import axios from 'axios'
import Axios from 'axios'

export default class SkillService{
getSkills(){
    return axios.get("http://localhost:8080/api/skills/getall")
}

}