export interface CourseMaterialModel{
    materialId?: string;
    fileName: string;
    materialType: string;
    material: File | string;
    uploadAt: string;
    courseId: string;
}