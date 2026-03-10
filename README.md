# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Painel Admin (CMS da Landing Page)

Este projeto já possui uma área de administração em `/admin` para editar o conteúdo da Landing Page (hero, estatísticas, destinos, galeria, experiências, manifesto, pacotes, CTA e rodapé).

### Como habilitar no Supabase

1. Crie um usuário no **Authentication > Users**.
2. Garanta as tabelas abaixo no banco:
   - `site_content` (coluna `content` em JSONB para armazenar o conteúdo editável)
   - `user_roles` (colunas `user_id` e `role`)
3. Atribua `admin` para o usuário no `user_roles`.

Exemplo de SQL:

```sql
create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  content jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

insert into public.user_roles (user_id, role)
values ('SEU_USER_ID_AQUI', 'admin')
on conflict (user_id, role) do nothing;
```

Depois disso, acesse `/admin`, faça login com o usuário admin e clique em **Salvar** para publicar alterações na Landing Page.
