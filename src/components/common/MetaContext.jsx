import {createContext, useCallback, useContext, useState} from 'react';

export const MetaContext = createContext(null);

export const MetaProvider = ({children}) => {
    const [meta, setMeta] = useState({});
    const [schemas, setSchemas] = useState([]);

    const updateMeta = useCallback((newMeta) => {
        setMeta(newMeta);
    }, []);

    const addSchema = useCallback((schema) => {
        setSchemas(prev => [...prev, schema]);
    }, []);

    const value = {meta, schemas, updateMeta, addSchema};

    return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
};

export const useMeta = () => {
    const context = useContext(MetaContext);
    if (!context) {
        throw new Error('useMeta must be used within a MetaProvider');
    }
    return context;
};

