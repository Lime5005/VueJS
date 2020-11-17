import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state() {
        return {
            coaches: [{
                    id: 'c1',
                    firstName: 'Max',
                    lastName: 'Schwarz',
                    areas: ['frontend', 'backend', 'career'],
                    description: "I'm Max and I've worked as freelance web developper for years.",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Erone',
                    lastName: 'Sam',
                    areas: ['backend', 'career'],
                    description: "I'm Erone I work for an international bank.",
                    hourlyRate: 30
                },
                {
                    id: 'c3',
                    firstName: 'Jolie',
                    lastName: 'Jones',
                    areas: ['frontend'],
                    description: "I'm Jolie and I work for a big company.",
                    hourlyRate: 30
                },
            ]
        }
    },
    mutations,
    getters,
    actions

}