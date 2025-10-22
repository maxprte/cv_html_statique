# Comment crée un mini site web sur git hub

Objectif :

2 activité

1ere activitées : en 2sceance

Faire son cv en html visible sur github an html statique (pas de framework) juste du html et un peux de css et de java script

Mini site a heberger sur github

Ne pas mettre d’info perso pour ne pas avoir de problemes avec les personnes qui regardent le CV

Mon site : https://maxprte.github.io/CV-PORTE-Max/index.html

Ce que j'ai réalisé : 
j'ai commencer par crée un fichier txt en y écrivant un texte html simple à l'aide de Bootstrap

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

puis j'ai ensuite enregistrer mon fichier en `.htlml` 

j'ai ensuite améliorer mon fichier en décortiquant mon CV pour en faire un CV web 

```html
<!DOCTYPE html>
<html>
<head>
    <title>CV en ligne - Max Porte</title>
    <meta name="viewort" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        header {
            background: linear-gradient(135deg, #0d6efd, #6610f2);
            color: #fff;
            text-align: center;
            padding: 2rem 1rem;
        }
        .cardd {
            border-radius: 15px;
            transition: transform 0.3s ease;
        }
        .cardd\:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            rotate: 10deg;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Max Porte</h1>
        <p>Étudiant en BTS SIO SISR - Alternance</p>
        <a href="#contact" class="btn btn-lg mt-3">Me Contacter</a>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">CV Max Porte</a>
            <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link">Formation</a></li>
                    <li class="nav-item"><a class="nav-link" href="#experience">Expériences</a></li>
                    <li class="nav-item"><a class="nav-link" href="#competences">Compétences</a></li>
                    <li class="nav-item"><a class="nav-link" href="#interets">Centres d’intérêt</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <section id="formation">
            <h3><i class="bi bi-mortarboard-fill me-2"></i>Formation</h3>
            <div class="card p-3 mb-3">
                <h4>BTS SIO SISR</h4>
                <p>CFAI UIMM Loire Drome Ardèche (2025 - en cours)</p>
            </div>
            <div class="card p-3 mb-3">
                <h4>Bac Professionnel Systèmes Numériques (mention Bien)</h4>
                <p>Lycée Professionnel Privé Le Marais Sainte Thérèse (2022)</p>
            </div>
        </section>

        <section id="experience">
            <h3><i class="bi bi-briefcase-fill me-2"></i>Expériences professionnelles</h3>
            <div class="accordion" id="expAccordion">
                <div class="accordion-item">
                    <h4 class="accordion-header" id="exp1">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#exp1Content">
                            Alternance - Yesss Electrique
                        </button>
                    </h4>
                    <div id="exp1Content" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            2 ans en alternance - Support informatique, réseaux, déploiement matériel.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="competences">
            <h3><i class="bi bi-lightbulb-fill me-2"></i>Compétences</h3>
            <ul class="list-group">
                <li class="list-group-item">Linux (Ubuntu Server)
                <li class="list-group-item">Windows 10/11
                <li class="list-group-item">Active Directory & GPO
            </ul>
        </section>

        <section id="contact">
            <h3><i class="bi bi-github me-2"></i>Contact</h3>
            <p>Retrouvez-moi sur GitHub :
                <a href="https://github.com/maxprte">Mon profil GitHub</a>
            </p>
        </section>
    </div>

    <div>
        <p>© 2025 Max Porte - CV en ligne</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```


# Max PORTE

**Alternant BTS SIO – Option SISR**  
📍 42130 Saint-Étienne (Le Molard)  
📧 [max.porte1234@gmail.com](mailto:max.porte1234@gmail.com)  
📞 07 69 56 62 33  
🚗 Permis B – Français  

---

## 🎯 Profil

Étudiant en **BTS Services Informatiques aux Organisations (SISR)** recherchant une **alternance** pour renforcer ses compétences en **administration système et réseau**.  
Motivé, rigoureux et passionné d’informatique, je souhaite contribuer à la gestion et la sécurité d’infrastructures IT modernes.

---

## 🎓 Formation

### **BTS SIO – Option SISR**
**CFAI UIMM Loire Drôme Ardèche**, Saint-Étienne  
📆 *Depuis septembre 2025 (1ʳᵉ année en alternance)*  
- Alternance au sein de **Yesss Electrique**.  
- Spécialisation en systèmes, réseaux et cybersécurité.

### **Bac Professionnel Systèmes Numériques (Option Réseaux)**
**Lycée Le Marais Sainte Thérèse**, Saint-Étienne  
📆 *2022 – 2025*  
- **Mention Bien** – Moyenne générale : 15.64 / 20  
- Projets : déploiement réseau, mise en place de serveurs, maintenance et câblage.

### **Brevet des Collèges**
**Collège de l’Astrée**  
📆 *2022*

---

## 💼 Expériences Professionnelles

### **Technicien support / Alternant**
**Yesss Electrique**, Saint-Étienne  
📆 *2025 – Aujourd’hui*  
- Assistance utilisateurs et dépannage poste client.  
- Gestion du parc informatique et mise à jour des postes Windows.  
- Déploiement et configuration d’imprimantes et équipements réseau.

### **Stage – Maintenance & Réseaux**
**Le Marais Sainte Thérèse**, Saint-Étienne  
📆 *2024 (8 semaines)*  
- Installation de serveurs Windows et Linux (Ubuntu).  
- Création d’un réseau local et câblage RJ45.  
- Configuration VLAN et routage sur matériel Cisco.

### **Stage – Infrastructure informatique**
**Entreprise locale (SME)**  
📆 *2023 (4 semaines)*  
- Déploiement d’un NAS et sauvegarde automatisée.  
- Rédaction de documentation technique.

---

## 🧠 Compétences

### **Systèmes & Serveurs**
- Linux (Ubuntu Server 24.04), Windows 10/11, Windows Server 2019  
- Installation, configuration, maintenance, scripts d’automatisation

### **Réseaux**
- Cisco (VLAN, trunk, routage statique et dynamique)  
- Pare-feu Fortinet (mise à jour firmware, filtrage, NAT)  
- Active Directory, DNS, DHCP, GPO

### **Outils & Logiciels**
- Virtualisation (Proxmox, VirtualBox)  
- NAS WD My Cloud Home Duo  
- Pack Office / LibreOffice  
- Notions de PowerShell, Bash

---

## 🏆 Projets Scolaires et Personnels

- Déploiement automatisé de VMs Windows Tiny10 sur **Proxmox** (script bash)  
- Mise en place d’un **NAS WD My Cloud Home Duo** pour sauvegarde réseau  
- Création d’un **dossier de 30 pages** sur un projet d’application pour la gestion de la vie des personnes âgées et handicapées (orientation création d’entreprise)  
- Expérimentation d’environnements **Kali Linux** pour la sécurité et le pentesting

---

## 💬 Langues

- **Français** : langue maternelle  
- **Anglais** : technique et professionnel

---

## ❤️ Centres d’intérêt

- Informatique et nouvelles technologies  
- Musique et MAO  
- Mécanique automobile  
- Sport (musculation, course)

---
