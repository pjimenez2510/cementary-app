import {
    IntermentRequest,
    IntermentResponse
} from "../../interfaces/interment.interface";

export interface IntermentRepository {
    createInterment(request: IntermentRequest): Promise<IntermentResponse>;

    getInterments(): Promise<IntermentResponse[]>;

    getIntermentById(id: string): Promise<IntermentResponse>;

    updateInterment(id: string, request: IntermentRequest): Promise<IntermentResponse>;
    
    deleteInterment(id: string): Promise<void>;
}