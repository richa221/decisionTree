# short, clear explanation for every question below: #
## 1. How can we design the system in a way that every Company will be able to serve games on their gaming site from their domain?
**Answer:** To allow companies their own game app on their desired domain we will have to use multi-tenant architecture which would have separated data for each site with their tenant(app).For which will have to create wildcard subdomain. and routing for the tenant based and when request received we can seperate by the tenant.

## 2. What modification should be done to the users table at gPlatform to support this change?
**Answer:** we will add tenant_id in users table. This will associate each user with a specific gaming company or domain and create Composite Unique Key which will be a combination of email and tenant_id, so that the same email address can exist for different gaming companies but under separate tenant_ids.

## 3. Considering we have 1 backend cluster that serves all companies, how can we validate a user login on one gaming domain in such a way that it does not give access to a different gaming domain? (i.e. authenticating on site A, grants access to site A only)
**Answer:** To ensure this like if user logged into one domain (site A) cannot access another domain (site B), the authentication process we will have to add on specific tenant level.  we can issue JWT tokens and ensure user login is validated based on both the domain and tenant-specific user records, isolating sessions per domain. Also in each api call we can send the tenant id and that we can validate on backend so that we can validate and serve that perticular tenant
