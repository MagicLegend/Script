var user_data_configs = [];

user_data_configs.push({
    id: "other",
    title: sangu_trans.other.title,
    save: function() { pers.set('sangusettings', JSON.stringify(user_data)); },
    properties: {
        farmLimitCombinedTest: {
            label: sangu_trans.other.farmLimitStackColors,
                propUI: {
                getter: function() {
                    return user_data.farmLimit.test;
                },
                setter: function(value) {
                    user_data.farmLimit.test = value;
                },
                editor: "array:color+number"
            }
        }/*,
         farmLimitColorsCombined: {
         label: sangu_trans.other.farmLimitStackColors,
         propUI: {
         getter: function() { return user_data.farmLimit.stacksConfig; },
         setter: function(value) { user_data.farmLimit.stacksConfig = value; },
         editor: "array|addNew:color+number|delete"
         }
         }*/
    }
});


if (false) {
    user_data_configs.push({
        id: "other",
        title: sangu_trans.other.title,
        save: function() { pers.set('sangusettings', JSON.stringify(user_data)); },
        properties: {
            proStyle: {
                tooltip: sangu_trans.other.proStyleTooltip,
                label: sangu_trans.other.proStyle,
                propUI: {
                    getter: function() { return user_data.proStyle; },
                    setter: function(value) { user_data.proStyle = value; },
                    editor: "bool"
                }
            },
            displayDays: {
                label: sangu_trans.other.displayDays,
                propUI: {
                    getter: function() { return user_data.displayDays; },
                    setter: function(value) { user_data.displayDays = value; },
                    editor: "bool"
                }
            },
            calculateSnob: {
                label: sangu_trans.other.calculateSnob,
                show: !world_config.coins,
                propUI: {
                    getter: function() { return user_data.other.calculateSnob; },
                    setter: function(value) { user_data.other.calculateSnob = value; },
                    editor: "bool"
                }
            },
            overviewLinks: {
                label: sangu_trans.other.overviewLinks,
                propUI: {
                    getter: function() { return user_data.overviews.addFancyImagesToOverviewLinks; },
                    setter: function(value) { user_data.overviews.addFancyImagesToOverviewLinks = value; },
                    editor: "bool"
                }
            },
            showPlayerProfileOnVillage: {
                label: sangu_trans.other.showPlayerProfileOnVillage,
                propUI: {
                    getter: function() { return user_data.showPlayerProfileOnVillage; },
                    setter: function(value) { user_data.showPlayerProfileOnVillage = value; },
                    editor: "bool"
                }
            },
            overviewAjaxSeperateSupport: {
                label: sangu_trans.other.ajaxSeperateSupport,
                show: server_settings.ajaxAllowed,
                propUI: {
                    getter: function() { return user_data.overview.ajaxSeperateSupport; },
                    setter: function(value) { user_data.overview.ajaxSeperateSupport = value; },
                    editor: "bool"
                }
            },
            commandRenamerTitle: {
                type: "subtitle",
                label: sangu_trans.other.commandRenamer
            },
            commandRenamerActive: {
                label: sangu_trans.other.commandRenamerActive,
                propUI: {
                    getter: function() { return user_data.attackAutoRename.active; },
                    setter: function(value) { user_data.attackAutoRename.active = value; },
                    editor: "bool"
                }
            },
            commandRenamerAddHaul: {
                label: sangu_trans.other.commandRenamerAddHaul,
                propUI: {
                    getter: function() { return user_data.attackAutoRename.addHaul; },
                    setter: function(value) { user_data.attackAutoRename.addHaul = value; },
                    editor: "bool"
                }
            },
            farmLimitTitle: {
                type: "subtitle",
                label: sangu_trans.other.farmLimitTitle
            },
            farmLimitColors: {
                label: sangu_trans.other.farmLimitStackColors,
                propUI: {
                    getter: function(propIndex) {
                        return user_data.farmLimit.stackColors;
                    },
                    setter: function(value, propIndex) { user_data.farmLimit.stackColors = value; },
                    editor: "array|addNew:color|delete"
                }
            },
            farmLimitAcceptableOverstack: {
                label: sangu_trans.other.farmLimitAcceptableOverstack,
                tooltip: sangu_trans.other.farmLimitAcceptableOverstackTooltip.replace("{farmlimit}", 30 * world_config.farmLimit),
                show: world_config.farmLimit,
                propUI: {
                    getter: function() { return user_data.farmLimit.acceptableOverstack; },
                    setter: function(value) { user_data.farmLimit.acceptableOverstack = value; },
                    editor: "array|addNew:float|delete|step=0.01"
                }
            },
            farmLimitUnlimitedStack: {
                label: sangu_trans.other.farmLimitUnlimitedStack,
                show: !world_config.farmLimit,
                propUI: {
                    getter: function() { return user_data.farmLimit.unlimitedStack; },
                    setter: function(value) { user_data.farmLimit.unlimitedStack = value; },
                    editor: "array|addNew:number|delete|step=1000"
                }
            }
        }
    });



user_data_configs.push({
    id: "global",
    title: sangu_trans.global.title,
    save: function() { pers.set('sangusettings', JSON.stringify(user_data)); },
    properties: {
        resourcesTitle: {
            type: "subtitle",
            label: sangu_trans.global.resources.title
        },
        resourcesActivate: {
            label: sangu_trans.global.resources.activate,
            propUI: {
                getter: function() { return user_data.global.resources.active; },
                setter: function(value) { user_data.global.resources.active = value; },
                editor: "bool"
            }
        },
        resourceColors: {
            label: sangu_trans.global.resources.colors,
            propUI: {
                getter: function() { return user_data.global.resources.backgroundColors; },
                setter: function(value) { user_data.global.resources.backgroundColors = value; },
                editor: "array|inline:color"
            }
        },
        resourcesBlinkWhenFull: {
            label: sangu_trans.global.resources.blinkWhenStorageFull,
            propUI: {
                getter: function() { return user_data.global.resources.blinkWhenStorageFull; },
                setter: function(value) { user_data.global.resources.blinkWhenStorageFull = value; },
                editor: "bool"
            }
        },
        incomingsTitle: {
            type: "subtitle",
            label: sangu_trans.global.incomingsTitle
        },
        incomingsEditLinks: {
            label: sangu_trans.global.incomingsEditLinks,
            tooltip: sangu_trans.global.incomingsEditLinksTooltip,
            propUI: {
                getter: function() { return user_data.global.incomings.editLinks; },
                setter: function(value) { user_data.global.incomings.editLinks = value; },
                editor: "bool"
            }
        },
        incomingsTrack: {
            label: sangu_trans.global.incomingsTrack,
            propUI: {
                getter: function() { return user_data.global.incomings.track; },
                setter: function(value) { user_data.global.incomings.track = value; },
                editor: "bool"
            }
        },
        jumperTitle: {
            type: "subtitle",
            label: sangu_trans.global.jumperTitle
        },
        jumperActivate: {
            label: trans.sp.sp.settings.activate,
            propUI: {
                getter: function() { return user_data.jumper.enabled; },
                setter: function(value) { user_data.jumper.enabled = value; },
                editor: "bool"
            }
        },
        jumperAutoOpen: {
            label: sangu_trans.global.jumperAutoOpen,
            propUI: {
                getter: function() { return user_data.jumper.autoShowInputbox; },
                setter: function(value) { user_data.jumper.autoShowInputbox = value; },
                editor: "bool"
            }
        },
        colorsTitle: {
            type: "subtitle",
            label: sangu_trans.global.colorsTitle
        },
        colorsError: {
            label: sangu_trans.global.colorsError,
            propUI: {
                getter: function() { return user_data.colors.error; },
                setter: function(value) { user_data.colors.error = value; },
                editor: "color"
            }
        },
        colorsGood: {
            label: sangu_trans.global.colorsGood,
            propUI: {
                getter: function() { return user_data.colors.good; },
                setter: function(value) { user_data.colors.good = value; },
                editor: "color"
            }
        },
        colorsNeutral: {
            label: sangu_trans.global.colorsNeutral,
            propUI: {
                getter: function() { return user_data.colors.neutral; },
                setter: function(value) { user_data.colors.neutral = value; },
                editor: "color"
            }
        },
        colorsSpecial: {
            label: sangu_trans.global.colorsSpecial,
            propUI: {
                getter: function() { return user_data.colors.special; },
                setter: function(value) { user_data.colors.special = value; },
                editor: "color"
            }
        },
        otherSettingsTitle: {
            type: "subtitle",
            label: sangu_trans.global.otherSettingsTitle
        },
        visualizeFriends: {
            label: sangu_trans.global.visualizeFriends,
            propUI: {
                getter: function() { return user_data.global.visualizeFriends; },
                setter: function(value) { user_data.global.visualizeFriends = value; },
                editor: "bool"
            }
        }
    }
});




user_data_configs.push({
    id: "main",
    title: sangu_trans.main.title,
    save: function() { pers.set('sangusettings', JSON.stringify(user_data)); },
    properties: {
        villageNames: {
            tooltip: sangu_trans.main.villageNamesTooltip,
            label: sangu_trans.main.villageNames,
            propUI: {
                getter: function() { return user_data.main.villageNames; },
                setter: function(value) { user_data.main.villageNames = value; },
                editor: "array|addNew:text|delete"
            }
        },
        villageNameClick: {
            tooltip: sangu_trans.main.villageNameClickTooltip,
            label: sangu_trans.main.villageNameClick,
            propUI: {
                getter: function() { return user_data.main.villageNameClick; },
                setter: function(value) { user_data.main.villageNameClick = value; },
                editor: "bool"
            }
        },
        ajaxLoyalty: {
            label: sangu_trans.main.ajaxLoyalty,
            show: server_settings.ajaxAllowed,
            propUI: {
                getter: function() { return user_data.main.ajaxLoyalty; },
                setter: function(value) { user_data.main.ajaxLoyalty = value; },
                editor: "bool"
            }
        }
    }
});



user_data_configs.push({
    id: "incoming",
    title: sangu_trans.incoming.title,
    save: function() { pers.set('sangusettings', JSON.stringify(user_data)); },
    properties: {
        autoOpenTagger: {
            label: sangu_trans.incoming.autoOpenTagger,
            propUI: {
                getter: function() { return user_data.incoming.autoOpenTagger; },
                setter: function(value) { user_data.incoming.autoOpenTagger = value; },
                editor: "bool"
            }
        },
        forceOpenTagger: {
            label: sangu_trans.incoming.forceOpenTagger,
            propUI: {
                getter: function() { return user_data.incoming.forceOpenTagger; },
                setter: function(value) { user_data.incoming.forceOpenTagger = value; },
                editor: "bool"
            }
        },
        renameInputTexbox: {
            label: sangu_trans.incoming.renameInputTexbox,
            tooltip: sangu_trans.incoming.renameInputTexboxTooltip,
            propUI: {
                getter: function() { return user_data.incoming.renameInputTexbox; },
                setter: function(value) { user_data.incoming.renameInputTexbox = value; },
                editor: "text"
            }
        },
        invertSort: {
            label: sangu_trans.incoming.invertSort,
            tooltip: sangu_trans.incoming.invertSortTooltip,
            propUI: {
                getter: function() { return user_data.incoming.invertSort; },
                setter: function(value) { user_data.incoming.invertSort = value; },
                editor: "bool"
            }
        }
    }
});



}