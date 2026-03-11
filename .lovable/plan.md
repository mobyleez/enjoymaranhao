

# Configurar banco de dados Supabase e admin

O banco de dados está completamente vazio. Preciso criar todas as tabelas que o código espera e configurar o usuário administrador.

## Passo 1 — Migração SQL (tabelas + RLS + função)

Criar via migration tool:

1. **Enum `app_role`** — com valores `admin`, `moderator`, `user`
2. **Tabela `user_roles`** — `id`, `user_id` (ref auth.users), `role` (app_role), unique constraint
3. **Tabela `site_content`** — `id` (text PK, default 'main'), `data` (jsonb), `updated_at` (timestamptz)
4. **Tabela `contact_leads`** — `id` (uuid PK), `name`, `email`, `phone`, `travel_date`, `message`, `created_at`
5. **Função `has_role`** — security definer para checar roles sem recursão RLS
6. **Políticas RLS**:
   - `user_roles`: leitura para authenticated
   - `site_content`: leitura pública, escrita para admins
   - `contact_leads`: inserção pública (anon), leitura para admins

## Passo 2 — Criar usuário admin

1. O usuário precisa criar a conta `mobyleezlab@gmail.com` no painel Supabase Auth (ou posso orientar a criação via dashboard)
2. Inserir a role `admin` na tabela `user_roles` para esse usuário

## Notas

- O usuário precisará definir uma senha para `mobyleezlab@gmail.com` no dashboard do Supabase em Authentication > Users
- Após criar o usuário, pegaremos o `user_id` para inserir na `user_roles`

