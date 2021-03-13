# Installation

You should have Python and pip already installed. Then run the command:

```bash
pip install -r requirements.txt
```

# Serve page

In order to serve the content inside the static folder, do as follows:

```bash
cd static
python -m http.server 8080
```

# Run tests

Once the page is served, run:

```bash
robot robot_tests
```
