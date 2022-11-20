# Lab 8 - Starter
Name: Meihui Liu

## Answer to **Check Your Understanding**:
1. Fit the automated tests within a Github action that runs whenever code is pushed. We shoulding run them all after all development is completed because there could be a lot of errors piling up as you develop and there could be some errors that may need to modify a large section of the code that can be avoided if test early. Manually run them locally before pushing takes too much time and may impair efficiency. Therefore, integrate test within Github action saves time and avoids potential large rewrite of the code.
2. No. It is easier to use Unit tests to check the return value of a function since E2E focuses more on the general performance of an app.
3. I would not use unit test to test the "message" feature since this feature requires multiple different functionality such as writing a message and sending a message. It is more suitable for E2E test. Unit test is more suitable for testing a single component.
4. Yes, I would use unit test to test the "max message length" feature since it is a single and small feature that doesn't invole interaction with other components.

## Screenshots:
<img width="377" alt="ss1" src="https://user-images.githubusercontent.com/49219958/202931662-ad0ca786-1bc6-4580-be12-c387ada17c3d.png">
<img width="491" alt="ss2" src="https://user-images.githubusercontent.com/49219958/202931663-010ad7fa-bf83-4b99-9a55-03c6e86057f4.png">
