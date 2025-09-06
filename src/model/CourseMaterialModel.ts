export interface CourseMaterialModel{
    materialId?: string;
    fileName: string;
    materialType: string;
    material: string | File;
    uploadAt: string;
    courseId: string;
}