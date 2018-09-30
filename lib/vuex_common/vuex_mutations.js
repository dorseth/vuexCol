export const set = (prop) => (state, val) => {
    state[prop] = val;
};

export const add = (prop) => (state, val) => {
    state[prop] += val;
};

export const to_true = (prop) => (state) => {
    state[prop] = true;
};
export const to_false = (prop) => (state) => {
    state[prop] = false;
};
export const toggle = (prop) => (state) => {
    state[prop] = !state[prop];
};
export const init = (prop) => (state) => {
    let type    = state[prop].constructor;
    state[prop] = new type();
};
export const push = (prop) => (state, val) => {
    state[prop].push(val);
};

export const push_defined = (prop, val) => (state) => {
    state[prop].push(val);
};

export const push_defined_factory = (prop, factory, factory_prop) => (state) => {
    state[prop].push(factory(...factory_prop));
};

export const push_abs_factory = (prop, factory) => (state, val) => {
    state[prop].push(factory(...val));
};

export const splice = (prop) => (state, index) => {
    state[prop].splice(index, 1);
};

export const splice_index = (prop) => (state, index) => {
    state[prop][index] && state[prop].splice(index, 1);
};

export const pop = (prop) => (state, val) => {
    let index = state[prop].indexOf(val);
    index > -1  && state[prop].splice(index, 1);
};

export const set_prop_by_index = (state_prop, prop) => (state, obj) =>{
    const {index, value} = obj;
    state[state_prop][index][prop] = value;
};

export const set_prop_by_id = (state_prop, prop) => (state, obj) => {
    const {id, value} = obj;
    state[state_prop].find(item => item.id == id)[prop] = value;
}

export const inc_prop_by_id = (state_prop, prop) => (state, obj) => {
    const {id, value} = obj;
    state[state_prop].find(item => item.id === id)[prop] += value;
}
export const to_false_prop_by_id = (state_prop, prop) => (state, obj) => {
    const {id, value} = obj;
    state[state_prop].find(item => item.id === id)[prop] = false;
}

export const to_true_prop_by_id = (state_prop, prop) => (state, obj) => {
    const {id, value} = obj;
    state[state_prop].find(item => item.id == id)[prop] = true;
}

export const toggle_prop_by_id = (state_prop, prop) => (state, obj) => {
    const {id, value} = obj;
    let item = state[state_prop].find(item => item.id == id)
    item[prop] = !item[prop];
}

export const toggle_prop_by_id_untoggle_others = (state_prop, prop) => (state, obj) => {
    const {id} = obj;
    state[state_prop].forEach(item => {
        if(item.id === id){
            item[prop] = !item[prop]
        } else{
            item[prop] = false;
        }
    })
}

export const dec_prop_by_id = (state_prop, prop) => (state, obj) => {
    const {id, value} = obj;
    state[state_prop].find(item => item.id == id)[prop] -= value;
}

export const push_by_id = (state_prop, prop) => (state, obj) =>{
    const {id, value} = obj;
    state[state_prop][id][prop].push(value);
};

export const splice_by_index = (state_prop, prop) => (state, index) =>{
    state[state_prop][index][prop].splice(index, 1);
};

export const push_by_secondary_index = (state_prop, prop, secondary_prop) => (state, obj) =>{
    const {index, secondary_index, value} = obj;
    state[state_prop][index][prop][secondary_index][secondary_prop].push(value);
};

export const toggle_by_secondary_index = (state_prop, prop, secondary_prop) => (state, obj) =>{
    const {index, secondary_index} = obj;
    state[state_prop][index][prop][secondary_index][secondary_prop] = !state[state_prop][index][prop][secondary_index][secondary_prop];
};

export const set_by_secondary_index = (state_prop, prop, secondary_prop) => (state, obj) =>{
    const {index, secondary_index, value} = obj;
    state[state_prop][index][prop][secondary_index][secondary_prop] = value;
};

export const toggle_prop_by_index = (state_prop, prop) => (state, index) =>{
    state[state_prop][index][prop] = !state[state_prop][index][prop];
};

export const to_true_prop_by_index_untoggle_others = (state_prop, prop) => (state, index) =>{
    for(const item of state[state_prop]){
        item[prop] = false;
    }
    state[state_prop][index][prop] = true;
};

export const to_false_all = (state_prop, prop) => (state) =>{
    for(const item of state[state_prop]){
        item[prop] = false;
    }
};

export const to_true_all = (state_prop, prop) => (state) =>{
    for(const item of state[state_prop]){
        item[prop] = true;
    }
};

export const nested_array_property = (state_prop, prop, nested_prop) => (state, obj) => {
    const {index, nested_index, value} = obj;
    state[state_prop][index][prop][nested_index][nested_prop] = value;
};

export const toggle_prop_by_index_untoggle_others = (state_prop, prop) => (state, index) =>{
    for(const [i, item] of state[state_prop].entries()){
        if(i === index){
            state[state_prop][index][prop] = !state[state_prop][index][prop];
        } else{
            item[prop] = false;
        }
    }
};

export const reset_state = (module) => (state) => {
    const prev_state = window['def_state'][module];
    Object.assign(state, JSON.parse(JSON.stringify(prev_state)));
};

