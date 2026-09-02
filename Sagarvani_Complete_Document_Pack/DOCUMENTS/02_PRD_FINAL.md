# Sagarvani --- Product Requirements Document

## 1. Product summary

Sagarvani is a conversational marine decision-intelligence platform. A
user asks a question; ORCA coordinates specialist marine agents that
combine ocean, weather, GIS and risk information, validate the result,
and return an evidence-backed recommendation.

## 2. Goals

-   Explain a complex multi-agent system quickly to a jury and
    non-technical users.
-   Make the dashboard feel like ocean mission control.
-   Demonstrate the complete flow: ask → agents work → validation →
    answer.
-   Design the product around Web/App, Helpline and Low-Bandwidth
    access.

## 3. Personas

  -----------------------------------------------------------------------
  Persona                 Need                    Primary surface
  ----------------------- ----------------------- -----------------------
  Fishermen & coastal     Simple safe             Helpline / simplified
  crews                   trip-planning, local    mobile
                          language, low           
                          connectivity            

  Researchers             Integrated datasets,    Web dashboard
                          visualization, scenario 
                          analysis                

  Maritime operators      Route planning, risk    Web dashboard
                          and operational         
                          intelligence            

  Disaster management /   Situational awareness   Dashboard / alerts
  coastal safety          and warnings            
  -----------------------------------------------------------------------

## 4. Marketing site

Sections: 1. Navbar 2. Hero 3. Intro 4. What Sets Sagarvani Apart 5.
Safer marine decisions CTA 6. All-in-one Marine Intelligence tabs 7.
Built for Every User / stakeholder explorer 8. From Question to
Validated Answer 9. Reliability & Validation 10. Our Approach / roadmap
11. Impact 12. FAQ 13. Technologies & Data Sources 14. Final CTA 15.
Footer

Pricing is explicitly excluded.

## 5. Dashboard

The console should contain: - Conversation rail - Prompt/text input -
Voice input - Central map/visualization canvas - Live agent status
rail - Top readouts - Reasoning & validation panel - Alerts panel -
Session/query history

## 6. MVP demo flow

1.  User enters the dashboard.
2.  User asks the agreed scripted marine question.
3.  ORCA interprets intent.
4.  Relevant specialist agents visibly transition through Running →
    Validated.
5.  If a contradiction is simulated, show Re-checking.
6.  Map layers update.
7.  Answer appears with recommendation, confidence, and evidence.
8.  User can inspect why the recommendation was produced.
9.  Voice input can be used as an alternative query entry path.

## 7. Functional requirements

-   FR1: Natural-language text query.
-   FR2: Voice query in MVP.
-   FR3: Agent orchestration visualization.
-   FR4: Map visualization for SST, wave height/currents, PFZ,
    cyclone/high-wave warnings.
-   FR5: Evidence and confidence for recommendations.
-   FR6: Visible re-check state for contradiction/low confidence.
-   FR7: Responsive marketing site.
-   FR8: At least one non-English language UI pathway / scaffold.
-   FR9: Session/query history.
-   FR10: Direct Launch Console access with no login.

## 8. Non-functional requirements

-   Immediate visible UI feedback even when backend work is slower.
-   Usable at approximately 1366×768 and above.
-   WCAG AA text contrast.
-   Independent map and conversation interaction zones.
-   Mock API can be replaced by FastAPI responses without rewriting UI.
-   WebGL/animation cleanup and reduced-motion support.

## 9. MVP vs later

### MVP

-   Full marketing site
-   Dashboard shell
-   Mock/sample data
-   One scripted end-to-end demo
-   Voice UI/path
-   Direct dashboard launch
-   No authentication

### Later

-   Production helpline/IVR
-   Full BHASHINI/Sarvam production voice pipeline
-   Real-time production data integrations
-   User accounts
-   Advanced scenario analysis

## 10. Success criteria

-   Viewer understands the product within 15 seconds.
-   Jury can narrate the ORCA pipeline after watching it once.
-   Every demonstrated recommendation visibly cites evidence.
-   Voice input is discoverable and works as a first-class MVP
    interaction.
