import {create_mutation} from './mutations';

const collection = (schema) => {
    let collection_item = {};
    let mutations       = {};
    let getters         = {};
    for(const key in Object.keys(schema)){
        collection_item[key] = schema[key].constructor;
        const type           = typeof collection_item[key];
        Object.assign(mutations, create_mutation(key, type));
    }
}