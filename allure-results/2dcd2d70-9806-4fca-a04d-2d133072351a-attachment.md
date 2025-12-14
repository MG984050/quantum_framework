# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - img "logo" [ref=e4]
    - paragraph [ref=e5]: Your Trusted Partner for Automation Testing Solutions and Training
    - heading "Login" [level=1] [ref=e6]
  - alert [ref=e7]:
    - paragraph [ref=e8]: Username not found.
  - generic [ref=e9]:
    - generic [ref=e10]:
      - generic [ref=e11]: Username
      - textbox "Username" [ref=e12]
    - generic [ref=e13]:
      - generic [ref=e14]: Password
      - textbox "Password" [ref=e15]
    - button "Sign In" [ref=e16] [cursor=pointer]
  - paragraph [ref=e17]:
    - text: Don't have an account?
    - link "Register here" [ref=e18] [cursor=pointer]:
      - /url: register.php
```