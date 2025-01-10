# Social Media Insights Workflow with LangFlow

This project demonstrates a LangFlow-based workflow for generating meaningful insights about social media post performance. The workflow integrates Astra DB for data retrieval and GROQ AI for insightful analysis, providing actionable recommendations based on user-selected post types.

---

## Overview

The workflow is designed to:
1. Allow users to input a social media post type (e.g., Reels, Static Images).
2. Fetch engagement data for the selected post type and overall averages from Astra DB.
3. Analyze the data using GROQ AI with a pre-configured prompt to generate insights.
4. Display actionable recommendations via a Chat Output.

---

## Workflow Components

![msedge_4sIIXwN7YB](https://github.com/user-attachments/assets/26ed4f7f-a439-4bbc-9846-3014918dee5f)

### 1. **Chat Input**
   - Captures the user’s selected post type (e.g., "Reels").
   - Acts as the starting point of the workflow.

### 2. **Custom Component**
   - Fetches data from Astra DB based on the post type.
   - Formats the retrieved data into a structured string for analysis.

### 3. **Astra DB Tool**
   - Queries the database to retrieve engagement metrics.
   - Contains mock data for demonstration purposes.

### 4. **GROQ AI**
   - Processes the data using a detailed system prompt.
   - Generates actionable insights, comparisons, and recommendations.

### 5. **Chat Output**
   - Displays the final insights in a user-friendly format.

---


Link to backend Repo - http://github.com/sujal011/SM_Eng_Analyzer-BE

