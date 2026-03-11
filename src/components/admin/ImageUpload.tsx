import React, { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Upload, Link, Loader2, X } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  previewHeight?: string;
}

const ImageUpload = ({ value, onChange, previewHeight = 'h-32' }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const ext = file.name.split('.').pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error } = await supabase.storage
        .from('site-images')
        .upload(path, file, { upsert: true });

      if (error) throw error;

      const { data } = supabase.storage
        .from('site-images')
        .getPublicUrl(path);

      onChange(data.publicUrl);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="admin-input flex items-center gap-2 cursor-pointer hover:border-primary/50 transition-colors text-sm"
        >
          {uploading ? (
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
          ) : (
            <Upload className="w-4 h-4 text-muted-foreground" />
          )}
          <span className="text-muted-foreground">
            {uploading ? 'Enviando...' : 'Escolher imagem'}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="admin-input flex items-center gap-2 cursor-pointer hover:border-primary/50 transition-colors text-sm px-3"
          title="Colar URL"
        >
          <Link className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {showUrlInput && (
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="https://..."
          className="admin-input text-sm"
        />
      )}

      {value && (
        <div className={`relative rounded-lg overflow-hidden border border-border ${previewHeight}`}>
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-1 right-1 bg-background/80 rounded-full p-1 hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
