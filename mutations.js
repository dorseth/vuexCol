import {set_prop_by_id, inc_prop_by_id, dec_prop_by_id} from '../vuexCollection/lib/vuex_common/vuex_mutations'

const dict = {
    'number' : (key) => ({
            [`SET_${key.toUpperCase()}`] : set_prop_by_id('collection', key),
            [`INC_${key.toUpperCase()}`] : inc_prop_by_id('collection', key),
            [`DEC_${key.toUpperCase()}`] : dec_prop_by_id('collection', key),
    }),
    'object' : (key) => {

    },
    'boolean': (key) => ({
            [`SET_${key.toUpperCase()}`]    : set_prop_by_id('collection', key),
    }),
    'string': (key) => ({
            [`SET_${key.toUpperCase()}`]    : set_prop_by_id('collection', key),
            [`TO_ZERO_${key.toUpperCase()}`]: set_prop_by_id('collection', ''),
    })
};

export const create_mutation = (key, type) => {
    return dict[type](key);
}