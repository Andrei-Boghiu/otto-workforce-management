# Otto — Workforce Management

A modern workforce management platform designed to help organizations structure teams, manage people, and streamline employee operations. Otto provides secure authentication, multi-organization support, role-based permissions, and day-off tracking — all with a clean and scalable architecture.

---

## Features

### Authentication

- Login with **email + password**.
- Login with **three OAuth providers** (e.g., Google, GitHub, Bitbucket).

---

## Organizations & Membership

### Create or Join Organizations

- Users can **create their own organizations**.
- Users can **request to join existing organizations**.

### Membership Management (Organization Owners)

- Approve or deny **join requests**.
- Manage all members of the organization.
- Modify each member’s **role**:

  - **Employee**
  - **Manager**
  - **Contractor**
  - **HR Specialist**

---

## Teams

### Team Structure

- Organization owners can create **any number of teams**.
- A team is always bound to one organization.
- A user can belong to **only one team at a time**.

### Permissions

- Users with **Manager** role or above can:

  - Add users to teams
  - Move users between teams (while respecting the “one team at a time” rule)
  - Approve or Deny days-off requests

---

## Organization Directory

All users within an organization can view relevant details about members, including:

- Role
- Assigned team
- Tenure
- And other profile information

---

## Employee Tools

### Day-Off Tracking

- Employees can request, manage, and track their days off.
- Designed to support HR visibility and team-level planning.

---

## Technology Overview (optional section you may expand)

- Framework: Next.js
- Database: PostgreSQL with Drizzle ORM
- Authentication: Supabase Auth + OAuth
- UI Kit: shadcn/ui
- Deployment: Vercel + Supabase

---

## Vision

Otto aims to be a minimal, clean, and efficient workforce management system that balances power with simplicity, enabling small and medium-sized teams to operate smoothly without legacy bloat.
