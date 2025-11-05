import {createContext, useContext, useState} from 'react';

export const MetaContext = createContext(null);

export const MetaProvider = ({children}) => {
    const [meta, setMeta] = useState({});
    const value = {meta, setMeta};

    return <MetaContext.Provider value={value}>{children}</MetaContext.Provider>;
};

export const useMeta = () => {
    const context = useContext(MetaContext);
    if (!context) {
        throw new Error('useMeta must be used within a MetaProvider');
    }
    return context;
};
