(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.querySelectorAll(".collapsible-button").forEach(t=>{t.addEventListener("click",()=>{const n=t.closest(".experiance-list-item");n.classList.toggle("collapsed");const o=n.querySelector(".collapsible-content"),i=n.classList.contains("collapsed");i?o.textContent=o.originalText:(o.originalText=o.textContent,o.textContent=o.textContent.slice(0,200)+"...");const e=t.querySelector("svg");e.innerHTML=i?'<path d="M6.66669 20H33.3334" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>':'<path d="M6.66669 20H33.3334" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 6.66699V33.3337" stroke="#141313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'})});document.querySelectorAll(".collapsible-content").forEach(t=>{t.textContent.length>200&&(t.originalText=t.textContent,t.textContent=t.textContent.slice(0,200)+"...")});const l=document.querySelector(".watch-more-btn");l&&l.addEventListener("click",()=>{window.location.href="/experience.html"});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".nav-link"),n=window.location.pathname.endsWith("/")?window.location.pathname.slice(0,-1):window.location.pathname;console.log("Current URL:",n),t.forEach(o=>{const i=o.getAttribute("href");console.log("Link Href:",i),i===n||i===`${n}.html`?o.classList.add("active"):o.classList.remove("active")})});
//# sourceMappingURL=main-BRMaCSqg.js.map