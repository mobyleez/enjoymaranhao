

# Upload de Imagens via Supabase Storage

Substituir os campos de URL por upload direto de arquivos nos editores admin (Hero, Destinos, Galeria).

## Infraestrutura

**1. Criar bucket no Supabase Storage** via migração SQL:
- Bucket `site-images`, público, para servir as imagens diretamente
- Políticas RLS: upload/delete para authenticated com role admin, leitura pública

## Componente Reutilizável

**2. Criar `ImageUpload` component** (`src/components/admin/ImageUpload.tsx`):
- Input file (accept image/*) com botão de upload estilizado
- Preview da imagem atual
- Ao selecionar arquivo: faz upload para `storage/site-images/{timestamp}-{filename}`
- Retorna a URL pública via callback `onUpload(url)`
- Mostra loading spinner durante upload
- Mantém opção de colar URL manualmente (fallback)

## Atualizar Editores

**3. Substituir inputs de URL nos 3 editores:**
- `HeroEditor.tsx` — campo `bgImage`
- `DestinationsEditor.tsx` — campo `image` de cada destino
- `GalleryEditor.tsx` — campo `image` de cada item

Cada campo de imagem passará a usar o componente `ImageUpload` em vez de `<input type="text">`.

## Detalhes Técnicos

- Upload usa `supabase.storage.from('site-images').upload(path, file)`
- URL pública via `supabase.storage.from('site-images').getPublicUrl(path)`
- Nomes de arquivo com prefixo timestamp para evitar colisões
- Bucket público para que as imagens sejam acessíveis sem autenticação na landing page

