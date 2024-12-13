export interface Value {
    name: string; 
    state: boolean; 
}

export interface Group {
    name: string; 
    lastDate: string; 
    values: Value[]; 
}