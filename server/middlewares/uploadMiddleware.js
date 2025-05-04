import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'TaskPilot', // Cloudinary folder (optional)
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allow specific formats
  },
});

// Multer instance using Cloudinary storage
const upload = multer({ storage });

export default upload;