---
layout: page
title: people
permalink: /people/
description: Members of the Environmental Research Laboratory
nav: true
nav_order: 3
---

## Principal Investigator

{% assign pi = site.data.members.pi %}
{% for member in pi %}
<div class="row mt-4 mb-5 align-items-center">
  <div class="col-sm-3 text-center">
    {% if member.image %}
      <img src="{{ '/assets/img/' | append: member.image | relative_url }}"
           alt="{{ member.name }}" class="img-fluid rounded-circle shadow"
           style="max-width: 160px;">
    {% endif %}
  </div>
  <div class="col-sm-9">
    <h4 class="mb-1">{{ member.name }}</h4>
    <p class="text-muted mb-2">{{ member.title }}, Department of Environmental Science and Engineering, IIT Bombay</p>
    <p>{{ member.bio }}</p>
    <div>
      {% if member.email %}
        <a href="mailto:{{ member.email }}" class="btn btn-sm btn-outline-secondary me-1">
          <i class="fas fa-envelope"></i> Email
        </a>
      {% endif %}
      {% if member.scholar %}
        <a href="https://scholar.google.com/citations?user={{ member.scholar }}" target="_blank"
           class="btn btn-sm btn-outline-secondary me-1">
          <i class="ai ai-google-scholar"></i> Scholar
        </a>
      {% endif %}
      {% if member.orcid %}
        <a href="https://orcid.org/{{ member.orcid }}" target="_blank"
           class="btn btn-sm btn-outline-secondary me-1">
          <i class="ai ai-orcid"></i> ORCID
        </a>
      {% endif %}
    </div>
  </div>
</div>
{% endfor %}

---

## PhD Scholars

<div class="row mt-3">
{% assign phd = site.data.members.phd %}
{% for member in phd %}
  <div class="col-sm-4 mb-4">
    <div class="card h-100 border-0 shadow-sm text-center p-3">
      {% if member.image %}
        <img src="{{ '/assets/img/' | append: member.image | relative_url }}"
             alt="{{ member.name }}"
             class="rounded-circle mx-auto mb-3 shadow-sm"
             style="width: 100px; height: 100px; object-fit: cover;">
      {% endif %}
      <h6 class="mb-1">{{ member.name }}</h6>
      <p class="small text-muted mb-1">PhD (joined {{ member.year_joined }})</p>
      <p class="small">{{ member.topic }}</p>
    </div>
  </div>
{% endfor %}
</div>

---

## M.Tech Students

<div class="row mt-3">
{% assign mtech = site.data.members.mtech %}
{% for member in mtech %}
  <div class="col-sm-4 mb-4">
    <div class="card h-100 border-0 shadow-sm text-center p-3">
      {% if member.image %}
        <img src="{{ '/assets/img/' | append: member.image | relative_url }}"
             alt="{{ member.name }}"
             class="rounded-circle mx-auto mb-3 shadow-sm"
             style="width: 100px; height: 100px; object-fit: cover;">
      {% endif %}
      <h6 class="mb-1">{{ member.name }}</h6>
      <p class="small text-muted mb-1">M.Tech (joined {{ member.year_joined }})</p>
      <p class="small">{{ member.topic }}</p>
    </div>
  </div>
{% endfor %}
</div>

---

## Alumni

| Name | Degree | Year | Current Position |
|------|--------|------|-----------------|
{% assign alumni = site.data.members.alumni %}{% for member in alumni %}| {{ member.name }} | {{ member.degree }} | {{ member.year }} | {{ member.current_position }} |
{% endfor %}
