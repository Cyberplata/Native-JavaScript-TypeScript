import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}
export function sum2(a: number, b: number) {
    return a + b;
}


// const res = sum(sum(1, 2), sum(1, 3));
// const res2 = sum(2, 3)

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget

}