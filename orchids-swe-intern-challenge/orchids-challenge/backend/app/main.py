# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi.staticfiles import StaticFiles
# from pydantic import BaseModel
# import requests
# from bs4 import BeautifulSoup
# import os
# import uuid
# import subprocess

# app = FastAPI()

# # Enable CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Serve screenshots folder
# app.mount("/screenshots", StaticFiles(directory="screenshots"), name="screenshots")

# # Input schema
# class CloneRequest(BaseModel):
#     url: str

# @app.post("/clone")
# async def clone_website(request: CloneRequest):
#     try:
#         # Fetch and parse HTML
#         response = requests.get(request.url, timeout=10)
#         soup = BeautifulSoup(response.text, "html.parser")

#         # Sanitize
#         for tag in soup(["script", "iframe", "style", "object", "embed", "noscript"]):
#             tag.decompose()

#         # Extract basic info
#         title = soup.title.string if soup.title else "Cloned Page"
#         stylesheets = soup.find_all("link", rel="stylesheet")
#         metas = soup.find_all("meta")
#         favicon = soup.find("link", rel=lambda x: x and "icon" in x.lower())

#         stylesheet_links = "\n".join(str(tag) for tag in stylesheets)
#         meta_tags = "\n".join(str(tag) for tag in metas)
#         favicon_tag = str(favicon) if favicon else ""
#         body_content = soup.body.decode_contents() if soup.body else "No body found."

#         # Generate screenshot using wkhtmltoimage
#         screenshot_filename = f"{uuid.uuid4().hex}.png"
#         screenshot_path = os.path.join("screenshots", screenshot_filename)
#         os.makedirs("screenshots", exist_ok=True)

#         print(f"Generating screenshot at: {screenshot_path}")
#         subprocess.run(
#             ["wkhtmltoimage", "--width", "1024", request.url, screenshot_path],
#             check=True
#         )
#         print("Screenshot generated successfully!")

#         # Final HTML + screenshot
#         cloned_html = f"""
#         <!DOCTYPE html>
#         <html lang=\"en\">
#         <head>
#             <meta charset=\"UTF-8\" />
#             <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
#             <title>{title}</title>
#             {favicon_tag}
#             {meta_tags}
#             {stylesheet_links}
#             <style>
#                 body {{
#                     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
#                     padding: 2rem;
#                     background-color: #f5f5f5;
#                     color: #222;
#                 }}
#                 a {{
#                     color: #0070f3;
#                 }}
#                 img {{
#                     max-width: 100%;
#                     height: auto;
#                     border: 1px solid #ccc;
#                     margin-top: 1rem;
#                 }}
#             </style>
#         </head>
#         <body>
#             <h1>{title}</h1>
#             <div>{body_content}</div>
#             <h2>Screenshot</h2>
#             <img src=\"http://127.0.0.1:8000/screenshots/{screenshot_filename}\" alt=\"Screenshot of cloned site\" />
#         </body>
#         </html>
#         """
#         return {"html": cloned_html}

#     except Exception as e:
#         return {"html": f"<h1>Error: {str(e)}</h1>"}
    
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import requests
from bs4 import BeautifulSoup
import os
import uuid
import subprocess

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve screenshots folder
app.mount("/screenshots", StaticFiles(directory="screenshots"), name="screenshots")

# Input schema
class CloneRequest(BaseModel):
    url: str

@app.post("/clone")
async def clone_website(request: CloneRequest):
    try:
        # Fetch and parse HTML
        response = requests.get(request.url, timeout=10)
        soup = BeautifulSoup(response.text, "html.parser")

        # Sanitize
        for tag in soup(["script", "iframe", "style", "object", "embed", "noscript"]):
            tag.decompose()

        # Extract basic info
        title = soup.title.string if soup.title else "Cloned Page"
        stylesheets = soup.find_all("link", rel="stylesheet")
        metas = soup.find_all("meta")
        favicon = soup.find("link", rel=lambda x: x and "icon" in x.lower())

        stylesheet_links = "\n".join(str(tag) for tag in stylesheets)
        meta_tags = "\n".join(str(tag) for tag in metas)
        favicon_tag = str(favicon) if favicon else ""
        body_content = soup.body.decode_contents() if soup.body else "No body found."

        # Generate screenshot using wkhtmltoimage
        screenshot_filename = f"{uuid.uuid4().hex}.png"
        screenshot_path = os.path.join("screenshots", screenshot_filename)
        os.makedirs("screenshots", exist_ok=True)

        print(f"Generating screenshot at: {screenshot_path}")
        subprocess.run(
            ["wkhtmltoimage", "--width", "1024", request.url, screenshot_path],
            check=True
        )
        print("Screenshot generated successfully!")

        # Prepare context and call simulated LLM
        context = {
            "title": title,
            "meta": meta_tags,
            "css": stylesheet_links,
            "body": body_content,
        }

        cloned_html = generate_html_with_llm(context)

        return {"html": cloned_html}

    except Exception as e:
        return {"html": f"<h1>Error: {str(e)}</h1>"}

# -----------------------------
# Simulated LLM function (move outside the /clone route)
def generate_html_with_llm(context: dict) -> str:
    """
    Simulates what an LLM would generate.
    Replace this with a real LLM call when available.
    """
    return f"""
    <html>
      <head>
        <title>{context['title']}</title>
        <style>
          body {{
            font-family: Arial, sans-serif;
            padding: 2rem;
            background-color: #f0f0f0;
            color: #333;
          }}
        </style>
      </head>
      <body>
        <h1>{context['title']}</h1>
        <div>{context['body']}</div>
        <p style='margin-top: 2rem; font-style: italic;'>*This HTML is simulated by a placeholder LLM function*</p>
      </body>
    </html>
    """
