exports.printMsg = function () {
    console.log("call function with below module values");
    console.log("weighted_tree_comp(treeData, selector, hier_ord, org_data, def_hier_data)");
}
// module.exports = {weighted_tree_comp}
module.weighted_tree_comp = weighted_tree_comp
module.treeData = treeData
module.selector = selector
module.hier_ord = hier_ord
module.org_data = org_data
module.def_hier_data = def_hier_data
var treeData = {
    children: [
        {
            name: "Promoter",
            children: [
                {
                    name: "NA",
                    children: [
                        {
                            name: "Tier1",
                            size: 7167709227.333994,
                            acc_counts: 1171,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-NA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 167165687.00800002,
                            acc_counts: 226,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-NA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 45673679.29999998,
                            acc_counts: 723,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-NA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 14678932.163000003,
                            acc_counts: 236,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-NA-Others",
                        },
                    ],
                    size: 7395227525.804995,
                    acc_counts: 2356,
                    color: "#06a241",
                    type: "regions",
                    id: "Promoter-NA",
                },
                {
                    name: "LA",
                    children: [
                        {
                            name: "Tier1",
                            size: 285394668.29099965,
                            acc_counts: 509,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-LA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 13439467.038999991,
                            acc_counts: 225,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-LA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 8140477.950999995,
                            acc_counts: 438,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-LA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 1009259.4419999995,
                            acc_counts: 172,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-LA-Others",
                        },
                    ],
                    size: 307983872.7229996,
                    acc_counts: 1344,
                    color: "#06a241",
                    type: "regions",
                    id: "Promoter-LA",
                },
                {
                    name: "EMEA",
                    children: [
                        {
                            name: "Tier1",
                            size: 1405478937.5049996,
                            acc_counts: 1341,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-EMEA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 71911279.38699995,
                            acc_counts: 341,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-EMEA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 34118214.47499996,
                            acc_counts: 678,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-EMEA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 12428747.600999996,
                            acc_counts: 109,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-EMEA-Others",
                        },
                    ],
                    size: 1523937178.9679995,
                    acc_counts: 2469,
                    color: "#06a241",
                    type: "regions",
                    id: "Promoter-EMEA",
                },
                {
                    name: "APJ",
                    children: [
                        {
                            name: "Tier1",
                            size: 969020795.9719993,
                            acc_counts: 615,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-APJ-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 24581950.82899999,
                            acc_counts: 150,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-APJ-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 13533623.175999995,
                            acc_counts: 220,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-APJ-Tier3",
                        },
                        {
                            name: "Others",
                            size: 1106655.5799999996,
                            acc_counts: 42,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-APJ-Others",
                        },
                    ],
                    size: 1008243025.5569993,
                    acc_counts: 1027,
                    color: "#06a241",
                    type: "regions",
                    id: "Promoter-APJ",
                },
                {
                    name: "GRC",
                    children: [
                        {
                            name: "Tier1",
                            size: 100739864.63600002,
                            acc_counts: 201,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-GRC-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 1554732.1039999996,
                            acc_counts: 26,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-GRC-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 2437686.0439999998,
                            acc_counts: 61,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-GRC-Tier3",
                        },
                        {
                            name: "Others",
                            size: 191797.836,
                            acc_counts: 11,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-GRC-Others",
                        },
                    ],
                    size: 104924080.62000002,
                    acc_counts: 299,
                    color: "#06a241",
                    type: "regions",
                    id: "Promoter-GRC",
                },
                {
                    name: "Others",
                    children: [
                        {
                            name: "Tier1",
                            size: 0,
                            acc_counts: 3,
                            color: "#06a241",
                            type: "tiers",
                            id: "Promoter-Others-Tier1",
                        },
                    ],
                    size: 0,
                    acc_counts: 3,
                    color: "#06a241",
                    type: "regions",
                    id: "Promoter-Others",
                },
            ],
            size: 10340315683.672993,
            acc_counts: 7498,
            color: "#06a241",
            type: "nps",
            id: "Promoter",
        },
        {
            name: "Passive",
            children: [
                {
                    name: "NA",
                    children: [
                        {
                            name: "Tier1",
                            size: 1720177960.8089998,
                            acc_counts: 324,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-NA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 43900564.551999986,
                            acc_counts: 59,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-NA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 11572322.412999997,
                            acc_counts: 159,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-NA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 1573004.198,
                            acc_counts: 52,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-NA-Others",
                        },
                    ],
                    size: 1777223851.972,
                    acc_counts: 594,
                    color: "#f06f1a",
                    type: "regions",
                    id: "Passive-NA",
                },
                {
                    name: "LA",
                    children: [
                        {
                            name: "Tier1",
                            size: 106380294.13599998,
                            acc_counts: 121,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-LA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 4008137.3659999995,
                            acc_counts: 57,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-LA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 1882759.7159999995,
                            acc_counts: 88,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-LA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 184472.864,
                            acc_counts: 33,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-LA-Others",
                        },
                    ],
                    size: 112455664.08199997,
                    acc_counts: 299,
                    color: "#f06f1a",
                    type: "regions",
                    id: "Passive-LA",
                },
                {
                    name: "EMEA",
                    children: [
                        {
                            name: "Tier1",
                            size: 661876717.8989997,
                            acc_counts: 462,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-EMEA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 25470793.779999994,
                            acc_counts: 154,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-EMEA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 14165158.72699999,
                            acc_counts: 248,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-EMEA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 4811676.407,
                            acc_counts: 45,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-EMEA-Others",
                        },
                    ],
                    size: 706324346.8129997,
                    acc_counts: 909,
                    color: "#f06f1a",
                    type: "regions",
                    id: "Passive-EMEA",
                },
                {
                    name: "APJ",
                    children: [
                        {
                            name: "Tier1",
                            size: 400448301.5169998,
                            acc_counts: 269,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-APJ-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 14742186.94899999,
                            acc_counts: 90,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-APJ-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 9298277.337,
                            acc_counts: 157,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-APJ-Tier3",
                        },
                        {
                            name: "Others",
                            size: 151691.05,
                            acc_counts: 23,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-APJ-Others",
                        },
                    ],
                    size: 424640456.8529998,
                    acc_counts: 539,
                    color: "#f06f1a",
                    type: "regions",
                    id: "Passive-APJ",
                },
                {
                    name: "GRC",
                    children: [
                        {
                            name: "Tier1",
                            size: 19834015.698999997,
                            acc_counts: 24,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-GRC-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 313750.588,
                            acc_counts: 3,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-GRC-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 394909.0539999997,
                            acc_counts: 11,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-GRC-Tier3",
                        },
                        {
                            name: "Others",
                            size: 40419.841,
                            acc_counts: 4,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-GRC-Others",
                        },
                    ],
                    size: 20583095.181999996,
                    acc_counts: 42,
                    color: "#f06f1a",
                    type: "regions",
                    id: "Passive-GRC",
                },
                {
                    name: "Others",
                    children: [
                        {
                            name: "Tier1",
                            size: 0,
                            acc_counts: 1,
                            color: "#f06f1a",
                            type: "tiers",
                            id: "Passive-Others-Tier1",
                        },
                    ],
                    size: 0,
                    acc_counts: 1,
                    color: "#f06f1a",
                    type: "regions",
                    id: "Passive-Others",
                },
            ],
            size: 3041227414.901999,
            acc_counts: 2384,
            color: "#f06f1a",
            type: "nps",
            id: "Passive",
        },
        {
            name: "Detractor",
            children: [
                {
                    name: "NA",
                    children: [
                        {
                            name: "Tier1",
                            size: 814369588.6150005,
                            acc_counts: 287,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-NA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 17646139.276999995,
                            acc_counts: 63,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-NA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 11808058.479999995,
                            acc_counts: 221,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-NA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 2067645.5009999995,
                            acc_counts: 69,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-NA-Others",
                        },
                    ],
                    size: 845891431.8730004,
                    acc_counts: 640,
                    color: "#940311",
                    type: "regions",
                    id: "Detractor-NA",
                },
                {
                    name: "LA",
                    children: [
                        {
                            name: "Tier1",
                            size: 23247536.617999993,
                            acc_counts: 88,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-LA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 1977889.9609999992,
                            acc_counts: 38,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-LA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 1323431.121999999,
                            acc_counts: 88,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-LA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 49582.251,
                            acc_counts: 25,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-LA-Others",
                        },
                    ],
                    size: 26598439.95199999,
                    acc_counts: 239,
                    color: "#940311",
                    type: "regions",
                    id: "Detractor-LA",
                },
                {
                    name: "EMEA",
                    children: [
                        {
                            name: "Tier1",
                            size: 339707588.3579996,
                            acc_counts: 272,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-EMEA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 7044157.546999997,
                            acc_counts: 81,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-EMEA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 7784480.769999992,
                            acc_counts: 163,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-EMEA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 2294517.1999999997,
                            acc_counts: 39,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-EMEA-Others",
                        },
                    ],
                    size: 356830743.8749996,
                    acc_counts: 555,
                    color: "#940311",
                    type: "regions",
                    id: "Detractor-EMEA",
                },
                {
                    name: "APJ",
                    children: [
                        {
                            name: "Tier1",
                            size: 124599485.15299991,
                            acc_counts: 169,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-APJ-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 9919971.896999992,
                            acc_counts: 75,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-APJ-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 7418044.376999998,
                            acc_counts: 114,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-APJ-Tier3",
                        },
                        {
                            name: "Others",
                            size: 1208317.201,
                            acc_counts: 21,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-APJ-Others",
                        },
                    ],
                    size: 143145818.6279999,
                    acc_counts: 379,
                    color: "#940311",
                    type: "regions",
                    id: "Detractor-APJ",
                },
                {
                    name: "GRC",
                    children: [
                        {
                            name: "Tier1",
                            size: 16043733.60599998,
                            acc_counts: 19,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-GRC-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 333376.6419999999,
                            acc_counts: 3,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-GRC-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 624051.4309999999,
                            acc_counts: 11,
                            color: "#940311",
                            type: "tiers",
                            id: "Detractor-GRC-Tier3",
                        },
                    ],
                    size: 17001161.67899998,
                    acc_counts: 33,
                    color: "#940311",
                    type: "regions",
                    id: "Detractor-GRC",
                },
            ],
            size: 1389467596.007,
            acc_counts: 1846,
            color: "#940311",
            type: "nps",
            id: "Detractor",
        },
        {
            name: "Non Respondents",
            children: [
                {
                    name: "NA",
                    children: [
                        {
                            name: "Tier1",
                            size: 17401276962.539997,
                            acc_counts: 13168,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-NA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 1312054499.9259994,
                            acc_counts: 5795,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-NA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 1420412958.8310003,
                            acc_counts: 25525,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-NA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 680253425.4739997,
                            acc_counts: 12621,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-NA-Others",
                        },
                    ],
                    size: 20813997846.770996,
                    acc_counts: 57109,
                    color: "#b7dcdb",
                    type: "regions",
                    id: "Non_Respondents-NA",
                },
                {
                    name: "LA",
                    children: [
                        {
                            name: "Tier1",
                            size: 1333543490.0660005,
                            acc_counts: 5033,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-LA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 145878567.41499987,
                            acc_counts: 3819,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-LA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 96896254.94199991,
                            acc_counts: 7154,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-LA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 344693174.29399985,
                            acc_counts: 4237,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-LA-Others",
                        },
                    ],
                    size: 1921011486.7170002,
                    acc_counts: 20243,
                    color: "#b7dcdb",
                    type: "regions",
                    id: "Non_Respondents-LA",
                },
                {
                    name: "EMEA",
                    children: [
                        {
                            name: "Tier1",
                            size: 5484476816.212997,
                            acc_counts: 10064,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-EMEA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 553436128.338,
                            acc_counts: 5312,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-EMEA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 518295537.3319996,
                            acc_counts: 11593,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-EMEA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 1034583018.8839995,
                            acc_counts: 5743,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-EMEA-Others",
                        },
                    ],
                    size: 7590791500.766997,
                    acc_counts: 32712,
                    color: "#b7dcdb",
                    type: "regions",
                    id: "Non_Respondents-EMEA",
                },
                {
                    name: "APJ",
                    children: [
                        {
                            name: "Tier1",
                            size: 2909541647.5259995,
                            acc_counts: 6530,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-APJ-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 277240592.8829997,
                            acc_counts: 2809,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-APJ-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 218032947.97399986,
                            acc_counts: 4590,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-APJ-Tier3",
                        },
                        {
                            name: "Others",
                            size: 90560378.46899995,
                            acc_counts: 2113,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-APJ-Others",
                        },
                    ],
                    size: 3495375566.8519993,
                    acc_counts: 16042,
                    color: "#b7dcdb",
                    type: "regions",
                    id: "Non_Respondents-APJ",
                },
                {
                    name: "GRC",
                    children: [
                        {
                            name: "Tier1",
                            size: 1217403439.428,
                            acc_counts: 2730,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-GRC-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 45695487.26099999,
                            acc_counts: 605,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-GRC-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 40515082.40899997,
                            acc_counts: 936,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-GRC-Tier3",
                        },
                        {
                            name: "Others",
                            size: 30451614.477999963,
                            acc_counts: 591,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-GRC-Others",
                        },
                    ],
                    size: 1334065623.5759997,
                    acc_counts: 4862,
                    color: "#b7dcdb",
                    type: "regions",
                    id: "Non_Respondents-GRC",
                },
                {
                    name: "Others",
                    children: [
                        {
                            name: "Tier1",
                            size: 719757.053,
                            acc_counts: 14,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-Others-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 856.05,
                            acc_counts: 2,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-Others-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 14884.96,
                            acc_counts: 2,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-Others-Tier3",
                        },
                        {
                            name: "Others",
                            size: 21624.5,
                            acc_counts: 7,
                            color: "#b7dcdb",
                            type: "tiers",
                            id: "Non_Respondents-Others-Others",
                        },
                    ],
                    size: 757122.563,
                    acc_counts: 25,
                    color: "#b7dcdb",
                    type: "regions",
                    id: "Non_Respondents-Others",
                },
            ],
            size: 35155999147.246,
            acc_counts: 130993,
            color: "#b7dcdb",
            type: "nps",
            id: "Non_Respondents",
        },
        {
            name: "Non Surveyed",
            children: [
                {
                    name: "NA",
                    children: [
                        {
                            name: "Tier1",
                            size: 7102150758.105993,
                            acc_counts: 6223,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-NA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 265460065.2889998,
                            acc_counts: 4350,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-NA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 682175275.3689989,
                            acc_counts: 26087,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-NA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 2111267410.9809961,
                            acc_counts: 70373,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-NA-Others",
                        },
                    ],
                    size: 10161053509.744987,
                    acc_counts: 107033,
                    color: "#D9D9D9",
                    type: "regions",
                    id: "Non_Surveyed-NA",
                },
                {
                    name: "LA",
                    children: [
                        {
                            name: "Tier1",
                            size: 578794067.3010002,
                            acc_counts: 7677,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-LA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 53131120.271999985,
                            acc_counts: 2261,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-LA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 55272112.88799995,
                            acc_counts: 4968,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-LA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 101558326.38399999,
                            acc_counts: 9040,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-LA-Others",
                        },
                    ],
                    size: 788755626.8450001,
                    acc_counts: 23946,
                    color: "#D9D9D9",
                    type: "regions",
                    id: "Non_Surveyed-LA",
                },
                {
                    name: "EMEA",
                    children: [
                        {
                            name: "Tier1",
                            size: 4864360703.296997,
                            acc_counts: 24485,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-EMEA-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 1031659994.6220002,
                            acc_counts: 18843,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-EMEA-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 1253104015.0549972,
                            acc_counts: 55504,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-EMEA-Tier3",
                        },
                        {
                            name: "Others",
                            size: 2959697822.092996,
                            acc_counts: 40474,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-EMEA-Others",
                        },
                    ],
                    size: 10108822535.06699,
                    acc_counts: 139306,
                    color: "#D9D9D9",
                    type: "regions",
                    id: "Non_Surveyed-EMEA",
                },
                {
                    name: "APJ",
                    children: [
                        {
                            name: "Tier1",
                            size: 2169255552.7620015,
                            acc_counts: 20549,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-APJ-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 431256289.74199915,
                            acc_counts: 12737,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-APJ-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 473689561.5719999,
                            acc_counts: 25311,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-APJ-Tier3",
                        },
                        {
                            name: "Others",
                            size: 1225659965.0809996,
                            acc_counts: 47856,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-APJ-Others",
                        },
                    ],
                    size: 4299861369.157001,
                    acc_counts: 106453,
                    color: "#D9D9D9",
                    type: "regions",
                    id: "Non_Surveyed-APJ",
                },
                {
                    name: "GRC",
                    children: [
                        {
                            name: "Tier1",
                            size: 2108690971.595996,
                            acc_counts: 44478,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-GRC-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 180634097.0489999,
                            acc_counts: 17726,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-GRC-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 275441060.5299998,
                            acc_counts: 18424,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-GRC-Tier3",
                        },
                        {
                            name: "Others",
                            size: 223164404.2539995,
                            acc_counts: 27900,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-GRC-Others",
                        },
                    ],
                    size: 2787930533.428995,
                    acc_counts: 108528,
                    color: "#D9D9D9",
                    type: "regions",
                    id: "Non_Surveyed-GRC",
                },
                {
                    name: "Others",
                    children: [
                        {
                            name: "Tier1",
                            size: 12503014.881,
                            acc_counts: 7,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-Others-Tier1",
                        },
                        {
                            name: "Tier2",
                            size: 11292.851,
                            acc_counts: 4,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-Others-Tier2",
                        },
                        {
                            name: "Tier3",
                            size: 928.33,
                            acc_counts: 4,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-Others-Tier3",
                        },
                        {
                            name: "Others",
                            size: 699.63,
                            acc_counts: 9,
                            color: "#D9D9D9",
                            type: "tiers",
                            id: "Non_Surveyed-Others-Others",
                        },
                    ],
                    size: 12515935.692,
                    acc_counts: 24,
                    color: "#D9D9D9",
                    type: "regions",
                    id: "Non_Surveyed-Others",
                },
            ],
            size: 28158939509.934975,
            acc_counts: 485290,
            color: "#D9D9D9",
            type: "nps",
            id: "Non_Surveyed",
        },
    ],
    type: "overall",
    id: "overall",
    size: 78085949351.76297,
    acc_counts: 628011,
},
selector = "#weighted_tree",
hier_ord = ["conversion_status", "lead_code", "lead_status", "b2b_flag"],
org_data = [
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 305,
        lead_stats: "New",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 3,
        lead_stats: "Pre-Qualified",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "0-Marketing Nurture",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 69,
        lead_stats: "Marketing Ready Lead",
    },
    {
        conversion_status: "Converted",
        lead_code: "2-Inquiry",
        lead_status: "Converted",
        b2b_flag: "B2B",
        acc_counts: 186,
        lead_stats: "Converted",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 632,
        lead_stats: "Rejected by Marketing",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 815,
        lead_stats: "Rejected by Marketing",
    },
    {
        conversion_status: "Converted",
        lead_code: "4-Full BANT",
        lead_status: "Converted",
        b2b_flag: "B2B",
        acc_counts: 8,
        lead_stats: "Converted",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 978,
        lead_stats: "Rejected by Marketing",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 661,
        lead_stats: "New",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 201,
        lead_stats: "New",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "4-Full BANT",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 1,
        lead_stats: "Working",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 12,
        lead_stats: "Marketing Ready Lead",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 18,
        lead_stats: "Rejected by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 11,
        lead_stats: "Pre-Qualified",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 29,
        lead_stats: "Rejected by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 2,
        lead_stats: "Cancelled - Sales Inactivity",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "Others",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 1,
        lead_stats: "New",
    },
    {
        conversion_status: "Converted",
        lead_code: "2-Inquiry",
        lead_status: "Converted",
        b2b_flag: "B2C",
        acc_counts: 76,
        lead_stats: "Converted",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 10,
        lead_stats: "Marketing Ready Lead",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "0-Marketing Nurture",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 3,
        lead_stats: "Rejected by Marketing",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 34,
        lead_stats: "Pre-Qualified",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 31,
        lead_stats: "Rejected by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 688,
        lead_stats: "Closed by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "0-Marketing Nurture",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 7,
        lead_stats: "Rejected by Marketing",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 19,
        lead_stats: "Marketing Ready Lead",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 148,
        lead_stats: "Working",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "0-Marketing Nurture",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 35,
        lead_stats: "New",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 4,
        lead_stats: "Cancelled - Sales Inactivity",
    },
    {
        conversion_status: "Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Converted",
        b2b_flag: "B2C",
        acc_counts: 54,
        lead_stats: "Converted",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 971,
        lead_stats: "Closed by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 7,
        lead_stats: "Cancelled - Sales Inactivity",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 11,
        lead_stats: "Rejected by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 897,
        lead_stats: "Closed by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 3,
        lead_stats: "Marketing Ready Lead",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "4-Full BANT",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 1,
        lead_stats: "New",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "4-Full BANT",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 21,
        lead_stats: "Closed by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 744,
        lead_stats: "New",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "0-Marketing Nurture",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 7,
        lead_stats: "Cancelled - Sales Inactivity",
    },
    {
        conversion_status: "Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Converted",
        b2b_flag: "B2B",
        acc_counts: 226,
        lead_stats: "Converted",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 60,
        lead_stats: "Working",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 939,
        lead_stats: "Rejected by Marketing",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 6,
        lead_stats: "Pre-Qualified",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "0-Marketing Nurture",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 4,
        lead_stats: "Marketing Ready Lead",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "Rejected",
        b2b_flag: "B2C",
        acc_counts: 676,
        lead_stats: "Closed by Sales",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "3-Partial BANT",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 111,
        lead_stats: "Working",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "2-Inquiry",
        lead_status: "New",
        b2b_flag: "B2B",
        acc_counts: 53,
        lead_stats: "Working",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "0-Marketing Nurture",
        lead_status: "New",
        b2b_flag: "B2C",
        acc_counts: 1,
        lead_stats: "New",
    },
    {
        conversion_status: "Not Converted",
        lead_code: "4-Full BANT",
        lead_status: "Rejected",
        b2b_flag: "B2B",
        acc_counts: 1,
        lead_stats: "Rejected by Sales",
    },
],
def_hier_data = {
    children: [
        {
            name: "Converted",
            children: [
                {
                    name: "2-Inquiry",
                    children: [
                        {
                            name: "Converted",
                            size: 262,
                            acc_counts: 262,
                            color: "#60386C",
                            type: "lead_status",
                            id: "Converted-Inquiry-Converted",
                            children: [
                                {
                                    name: "B2B",
                                    size: 186,
                                    acc_counts: 186,
                                    color: "#60386C",
                                    type: "b2b_flag",
                                    id: "Inquiry-Converted-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 76,
                                    acc_counts: 76,
                                    color: "#60386C",
                                    type: "b2b_flag",
                                    id: "Inquiry-Converted-B2C",
                                },
                            ],
                        },
                    ],
                    size: 262,
                    acc_counts: 262,
                    color: "#60386C",
                    type: "lead_code",
                    id: "Converted-Inquiry",
                },
                {
                    name: "3-Partial BANT",
                    children: [
                        {
                            name: "Converted",
                            size: 280,
                            acc_counts: 280,
                            color: "#60386C",
                            type: "lead_status",
                            id: "Converted-Partial_BANT-Converted",
                            children: [
                                {
                                    name: "B2B",
                                    size: 226,
                                    acc_counts: 226,
                                    color: "#60386C",
                                    type: "b2b_flag",
                                    id: "Partial_BANT-Converted-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 54,
                                    acc_counts: 54,
                                    color: "#60386C",
                                    type: "b2b_flag",
                                    id: "Partial_BANT-Converted-B2C",
                                },
                            ],
                        },
                    ],
                    size: 280,
                    acc_counts: 280,
                    color: "#60386C",
                    type: "lead_code",
                    id: "Converted-Partial_BANT",
                },
                {
                    name: "4-Full BANT",
                    children: [
                        {
                            name: "Converted",
                            size: 8,
                            acc_counts: 8,
                            color: "#60386C",
                            type: "lead_status",
                            id: "Converted-Full_BANT-Converted",
                            children: [
                                {
                                    name: "B2B",
                                    size: 8,
                                    acc_counts: 8,
                                    color: "#60386C",
                                    type: "b2b_flag",
                                    id: "Full_BANT-Converted-B2B",
                                },
                            ],
                        },
                    ],
                    size: 8,
                    acc_counts: 8,
                    color: "#60386C",
                    type: "lead_code",
                    id: "Converted-Full_BANT",
                },
            ],
            size: 550,
            acc_counts: 550,
            color: "#60386C",
            type: "conversion_status",
            id: "Converted",
        },
        {
            name: "Not Converted",
            children: [
                {
                    name: "Others",
                    children: [
                        {
                            name: "New",
                            size: 1,
                            acc_counts: 1,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Others-New",
                            children: [
                                {
                                    name: "B2C",
                                    size: 1,
                                    acc_counts: 1,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Others-New-B2C",
                                },
                            ],
                        },
                    ],
                    size: 1,
                    acc_counts: 1,
                    color: "#1676cd",
                    type: "lead_code",
                    id: "Not_Converted-Others",
                },
                {
                    name: "0-Marketing Nurture",
                    children: [
                        {
                            name: "New",
                            size: 36,
                            acc_counts: 36,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Marketing_Nurture-New",
                            children: [
                                {
                                    name: "B2B",
                                    size: 35,
                                    acc_counts: 35,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Marketing_Nurture-New-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 1,
                                    acc_counts: 1,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Marketing_Nurture-New-B2C",
                                },
                            ],
                        },
                        {
                            name: "Rejected",
                            size: 90,
                            acc_counts: 90,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Marketing_Nurture-Rejected",
                            children: [
                                {
                                    name: "B2B",
                                    size: 83,
                                    acc_counts: 83,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Marketing_Nurture-Rejected-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 7,
                                    acc_counts: 7,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Marketing_Nurture-Rejected-B2C",
                                },
                            ],
                        },
                    ],
                    size: 126,
                    acc_counts: 126,
                    color: "#1676cd",
                    type: "lead_code",
                    id: "Not_Converted-Marketing_Nurture",
                },
                {
                    name: "2-Inquiry",
                    children: [
                        {
                            name: "New",
                            size: 628,
                            acc_counts: 628,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Inquiry-New",
                            children: [
                                {
                                    name: "B2B",
                                    size: 361,
                                    acc_counts: 361,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Inquiry-New-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 267,
                                    acc_counts: 267,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Inquiry-New-B2C",
                                },
                            ],
                        },
                        {
                            name: "Rejected",
                            size: 3246,
                            acc_counts: 3246,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Inquiry-Rejected",
                            children: [
                                {
                                    name: "B2B",
                                    size: 1566,
                                    acc_counts: 1566,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Inquiry-Rejected-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 1680,
                                    acc_counts: 1680,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Inquiry-Rejected-B2C",
                                },
                            ],
                        },
                    ],
                    size: 3874,
                    acc_counts: 3874,
                    color: "#1676cd",
                    type: "lead_code",
                    id: "Not_Converted-Inquiry",
                },
                {
                    name: "3-Partial BANT",
                    children: [
                        {
                            name: "New",
                            size: 1709,
                            acc_counts: 1709,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Partial_BANT-New",
                            children: [
                                {
                                    name: "B2B",
                                    size: 866,
                                    acc_counts: 866,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Partial_BANT-New-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 843,
                                    acc_counts: 843,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Partial_BANT-New-B2C",
                                },
                            ],
                        },
                        {
                            name: "Rejected",
                            size: 3496,
                            acc_counts: 3496,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Partial_BANT-Rejected",
                            children: [
                                {
                                    name: "B2B",
                                    size: 1838,
                                    acc_counts: 1838,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Partial_BANT-Rejected-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 1658,
                                    acc_counts: 1658,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Partial_BANT-Rejected-B2C",
                                },
                            ],
                        },
                    ],
                    size: 5205,
                    acc_counts: 5205,
                    color: "#1676cd",
                    type: "lead_code",
                    id: "Not_Converted-Partial_BANT",
                },
                {
                    name: "4-Full BANT",
                    children: [
                        {
                            name: "New",
                            size: 2,
                            acc_counts: 2,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Full_BANT-New",
                            children: [
                                {
                                    name: "B2B",
                                    size: 1,
                                    acc_counts: 1,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Full_BANT-New-B2B",
                                },
                                {
                                    name: "B2C",
                                    size: 1,
                                    acc_counts: 1,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Full_BANT-New-B2C",
                                },
                            ],
                        },
                        {
                            name: "Rejected",
                            size: 22,
                            acc_counts: 22,
                            color: "#1676cd",
                            type: "lead_status",
                            id: "Not_Converted-Full_BANT-Rejected",
                            children: [
                                {
                                    name: "B2B",
                                    size: 22,
                                    acc_counts: 22,
                                    color: "#1676cd",
                                    type: "b2b_flag",
                                    id: "Full_BANT-Rejected-B2B",
                                },
                            ],
                        },
                    ],
                    size: 24,
                    acc_counts: 24,
                    color: "#1676cd",
                    type: "lead_code",
                    id: "Not_Converted-Full_BANT",
                },
            ],
            size: 9230,
            acc_counts: 9230,
            color: "#1676cd",
            type: "conversion_status",
            id: "Not_Converted",
        },
    ],
    type: "overall",
    id: "overall",
    size: 97.8,
    acc_counts: 9780,
};

function weighted_tree_comp(
    treeData,
    selector,
    hier_ord,
    org_data,
    def_hier_data
) {
    var actual_data = treeData;
    var it_condition = true;
    while (it_condition) {
        if (
            actual_data["children"] == undefined ||
            actual_data["children"].length === 0
        ) {
            it_condition = false;
        } else {
            actual_data = _.minBy(actual_data.children, function (o) {
                return o.acc_counts;
            });
        }
    }
    var tree_clicked_url = "Promoter-NA-Tier1";
    var g_redrw = true,
        depth_var = 5;
    $(selector).empty();
    if (treeData.length == 0) {
        treeData = {
            // "name": "Top Level",
            children: [
                {
                    name: "Tier -1",
                    children: [
                        {
                            name: "EA",
                            children: [
                                {
                                    name: "Direct",
                                    children: [
                                        {
                                            name: "Top",
                                            children: [
                                                { name: "Promoter", size: 5, color: "red" },
                                                { name: "Passive", size: 2, color: "red" },
                                                { name: "Detractor", size: 0, color: "red" },
                                                { name: "Non Respondents", size: 1, color: "red" },
                                                { name: "Non surveyed", size: 7, color: "red" },
                                            ],
                                            size: 2,
                                            color: "red",
                                        },
                                        { name: "Non Top", size: 4, color: "red" },
                                    ],
                                    size: 2,
                                    color: "red",
                                },
                                {
                                    name: "Channel",
                                    children: [{ name: "Top", size: 0, color: "red" }],
                                    size: 5,
                                    color: "red",
                                },
                            ],
                            size: 20,
                            color: "red",
                        },
                        { name: "APJ", size: 8, color: "red" },
                    ],
                    size: 20,
                    color: "red",
                },
                {
                    name: "Tier - 2",
                    children: [],
                    size: 10,
                    color: "green",
                },
            ],
        };
    }
    // Set the dimensions and margins of the diagram
    var margin = { top: 0, right: 10, bottom: 0, left: 0 },
        parent_width = $(selector).width() || 600,
        // parent_height = 400,
        parent_height = $(selector).height() || 900,
        // width = 1260 - margin.left - margin.right,
        // height = 400 - margin.top - margin.bottom;
        width = parent_width - margin.left - margin.right,
        height = parent_height - margin.top - margin.bottom;
    $(".cx-tooltip").remove();
    var svg = d3
        .select(selector)
        .append("svg")
        .attr("id", "weightd_tree")
        .attr("viewBox", "0 0 " + width + " " + (height + 10))
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("width", "100%")
        // .attr("width", width + margin.right + margin.left)
        .attr("height", height)
        .append("g")
        .attr("class", "svg-g-class")
        //   .attr("transform", "translate("
        //   + margin.left + "," + margin.top + ")");
        .attr("transform", "translate(" + (110 - 30) + "," + height / 2 + ")");
    // var sizing =
    //     treeData.children.length > 10
    //         ? "small"
    //         : treeData.children.length > 4
    //             ? "medium"
    //             : "large",
    var sizing = "large",
        size_mapping = {
            small: { link: [6, 20], bubble: [2, 10], nSizeMax: 2.5, nSizeMin: 2.5 },
            medium: { link: [8, 30], bubble: [3, 15], nSizeMax: 3.5, nSizeMin: 3.5 },
            large: { link: [28, 40], bubble: [15, 20], nSizeMax: 7, nSizeMin: 5 },
        };
    var min_path = actual_data.acc_counts,
        max_path = _.maxBy(treeData["children"], "acc_counts").acc_counts,
        i = 0,
        duration = 750,
        root,
        // d3.scaleSqrt().domain([1000, 29061202882.962242]).range([5,30])
        link_width = d3
            .scaleSqrt()
            .domain([min_path, max_path])
            .range(size_mapping[sizing]["link"])
            .clamp(true);
    var bubble_width = d3
        .scaleSqrt()
        .domain([min_path, max_path])
        .range(size_mapping[sizing]["bubble"])
        // .range([1.5, 50])
        .clamp(true);
    // declares a tree layout and assigns the size
    var nSize =
        window.screen.availWidth > 1366
            ? size_mapping[sizing]["nSizeMax"]
            : size_mapping[sizing]["nSizeMin"];

    var treemap = d3
        .tree()
        .size([height, width])
        .nodeSize([nSize, 10]) //make node space
        .separation(function (a, b) {
            var spe;
            if (a.depth != 0 && a.depth != 1) {
                if (a.depth == 4 || a.depth == 5) {
                    spe = a.parent == b.parent ? 38 : 50;
                } else {
                    spe = a.parent == b.parent ? 38 : 50;
                }
            } else {
                spe = a.parent == b.parent ? 18 : 50;
            }
            return spe;
        }); // make separation accessor 1;
    var nodes, links;
    // Assigns parent, children, height, depth
    root = d3.hierarchy(treeData, function (d) {
        return d.children;
    });
    root.x0 = height / 2;
    root.y0 = 0;

    // Collapse after the second level
    root.children.forEach(collapse);

    update(root);
    // Collapse the node and all it's children
    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function mouseover(d) {
        var hovered_classes = d.data.id.split("-");
        d3.selectAll(`path`).style("stroke-opacity", 0.25);
        d3.selectAll(`circle`).style("fill-opacity", 0.25);
        _.each(hovered_classes, function (hc) {
            // d3.selectAll(`path:not(.${hc})`).style('stroke-opacity', 0.25)
            d3.select("path." + hc).style("stroke-opacity", 1);
            d3.select("circle." + hc).style("fill-opacity", 1);
        });
    }

    function mouseout() {
        d3.selectAll(".link").style("stroke-opacity", 1);
        d3.selectAll(".node").style("fill-opacity", 1);
        d3.selectAll("circle").style("fill-opacity", 0.5);
        d3.select("circle#overall").style("fill-opacity", 1);
    }

    function update(source) {
        // Assigns the x and y position for the nodes
        var treeData = treemap(root);
        // Compute the new tree layout.
        links = treeData.descendants().slice(1);
        nodes = treeData.descendants();

        // Highlight the category legend
        var all_btns = $(".weighted-tree-hirer li").find("button");
        all_btns.removeClass("bg-info");
        all_btns.find(".cx-hier-num").removeClass("text-info bg-white");
        all_btns.find(".cx-hier-name").removeClass("text-white");

        all_btns.find("img").remove();
        all_btns.prepend('<img src="../assets/img/drag-grey.svg" alt="drag">');
        all_btns.addClass("bg-white");
        all_btns.find(".cx-hier-num").addClass("bg-color4 text-white");
        all_btns.find(".cx-hier-name").addClass("text-color34");

        var _depth = _.chain(nodes).map("depth").max().value();
        var next_section = $(".weighted-tree-hirer li")
            .eq(_depth)
            .prevAll()
            .find("button");

        if (next_section.length === 0) {
            next_section = $(".weighted-tree-hirer li").find("button");
        }
        next_section.find("img").remove();
        next_section.prepend('<img src="../assets/img/drag-white.svg" alt="drag">');
        next_section.toggleClass("bg-info bg-white");
        next_section.find(".cx-hier-num").toggleClass("bg-color4 bg-white");
        next_section.find(".cx-hier-num").toggleClass("text-white text-info");
        next_section.find(".cx-hier-name").toggleClass("text-color34 text-white");

        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = window.screen.availWidth > 1366 ? d.depth * 360 : d.depth * 240;
            // if (prev_pos) { d.x = d.x / 10 }
        });
        // Store the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
        // ****************** links section ***************************

        // Update the links...
        var link = svg.selectAll("path.link").data(links, function (d) {
            return d.id;
        });

        // Enter any new links at the parent's previous position.
        var linkEnter = link
            .enter()
            .insert("path", "g")
            .attr("class", function (d, i) {
                if (d.data.name != null) {
                    return `link link-${i} ${d.data.name
                        .replace(/ /g, "_")
                        .replace(/[0-9]-/, "")}`;
                }
            })
            .attr("d", function (d, i) {
                var path, o;
                o = { x: source.x, y: source.y };
                // if (d.depth != 1 && d.depth != 0) {
                //   // if()
                //   path = diagonal(o, o)
                // } else {
                //   path = diagonal(o, o)
                // }
                return diagonal(o, o);
            })
            .attr("stroke", function (d) {
                return d.data.color || "#00447C";
            })
            .attr("stroke-width", function (d) {
                return (link_width(d.data.acc_counts) || 1) + "px";
            })
            .style("fill", "none")
            .style("opacity", "0.3")
            .style("pointer-events", "none")
            .attr("stroke-linecap", "round");

        // UPDATE
        var linkUpdate = linkEnter.merge(link);

        // Transition back to the parent element position
        linkUpdate
            .transition()
            .duration(duration)
            .attr("d", function (d) {
                var path;
                if (d.depth != 1 && d.depth != 0) {
                    path = diagonal0(d, d.parent, d.depth, d.children);
                } else {
                    path = diagonal(d, d.parent);
                }
                return path;
            });

        // Remove any exiting links
        link
            .exit()
            .transition()
            .duration(duration)
            .attr("d", function (d) {
                var o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
            .remove();
        function curve(sx, sy, tx, ty) {
            var dx = tx - sx,
                dy = ty - sy,
                ix = 0.4 * (dx + dy),
                iy = 0.4 * (dy - dx);
            return (
                "M" +
                sx +
                "," +
                sy +
                "C" +
                (sx + ix) +
                "," +
                (sy + iy) +
                " " +
                (tx + iy) +
                "," +
                (ty - ix) +
                " " +
                tx +
                "," +
                ty
            );
        }

        function diagonal1(s, d) {
            var sa = s.x,
                sr = s.y,
                ta = d.x,
                tr = d.y;
            return curve(
                sr * Math.cos(sa),
                sr * Math.sin(sa),
                tr * Math.cos(ta),
                tr * Math.sin(ta)
            );
        }

        // Creates a curved (diagonal) path from parent to the child nodes
        function diagonal(s, d) {
            return `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;
        }
        function diagonal0(s, d, depth, children) {
            // var x = 400/children.length;
            if (depth == 2) {
                s.x = s.x * 0.38;
            } else if (depth == 3) {
                s.x = s.x * 0.25;
            } else if (depth == 4) {
                s.x = s.x * 0.18;
            } else if (depth == 5) {
                s.x = s.x * 0.17;
            }
            // return `M ${s.y} ${s.x}
            //         L ${d.y} ${d.x}`
            return `M ${s.y} ${s.x}
      C ${(s.y + d.y) / 2} ${s.x},
        ${(s.y + d.y) / 2} ${d.x},
        ${d.y} ${d.x}`;
        }
        // var ly = svg.layout.diagonal.projection()
        // ****************** Nodes section ***************************
        // Update the nodes...
        var node = svg.selectAll("g.node").data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

        // Enter any new modes at the parent's previous position.
        var nodeEnter = node
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("id", function (d) {
                return `g_${d.data.name}`;
            })
            .attr("transform", function (d) {
                //   trans = "translate(" + source.y0 + "," + (source.x0) + ")";
                return "translate(" + source.y + "," + source.x + ")";
            })

        // .on("contextmenu", dbl_click)
        // .on("mouseover", mouseover)

        // Add Circle for the nodes
        nodeEnter
            .append("circle")
            .attr("class", function (d) {
                return `node tooltip-class ${d.data.name != undefined
                        ? d.data.name.replace(/ /g, "_").replace(/[0-9]-/, "")
                        : ""
                    }`;
            })
            .attr("id", function (d) {
                return d.data.id;
            })
            .attr("r", function (d) {
                return bubble_width(d.data.acc_counts) || 10;
            })
            .style("fill", function (d) {
                return d.data.color || "#00447C";
                // return d._children ? "lightsteelblue" : "#fff";
            })
            .style("fill-opacity", function (d) {
                return d.id == 1 ? 1 : 0.5;
            })
            .on("mouseover", mouseover)
            .on("mouseout", mouseout);
        var lab = parse_url().searchKey.labels || "on";
        nodeEnter
            .append("text")
            .attr("class", "bubble-text text-capitalize")
            .attr("dy", ".35em")
            .attr("x", function (d) {
                // return -25;
                return d.id == 1
                    ? -bubble_width(d.data.acc_counts) - 20
                    : bubble_width(d.data.acc_counts) + 5;
            })
            .attr("y", function (d) {
                return 0;
                // return d.id == 1 ? 0 : bubble_width(d.data.size) + 5 || 20;
            })
            .attr("text-anchor", function (d) {
                // return "end";
                return d.id == 1 ? "end" : "start";
            })
            .attr("font-size", 11)
            .text(function (d) {
                var disp_txt =
                    d.data.name || parse_url().searchKey.parent_id || "overall";
                if (d.depth == 0) {
                    var prev_id = parse_url().searchKey.prev_id || "overall";
                    update_url({
                        prev_id:
                            prev_id != "overall" && disp_txt != "overall"
                                ? _.join([prev_id, disp_txt], "-")
                                : disp_txt,
                    });
                }
                if (d.depth == 4) {
                    return window.screen.availWidth >= 1920
                        ? disp_txt
                        : truncateString(disp_txt, 6);
                } else {
                    return window.screen.availWidth >= 1920
                        ? disp_txt
                        : truncateString(disp_txt, 16);
                }
            })
            .style("display", function () {
                return lab == "on" ? "" : "none";
            });
        // .text(function (d) { return d.data.name || ((parse_url().searchKey.parent_tree || "overall")+ " : "+format_revenue_number(max_path)); });
        nodeEnter
            .append("text")
            .attr("class", "bubble-text text-capitalize")
            .attr("dy", ".35em")
            .attr("x", function (d) {
                // return -25;
                return d.id == 1
                    ? -bubble_width(d.data.acc_counts) - 15
                    : bubble_width(d.data.acc_counts) + 5;
            })
            .attr("y", function (d) {
                // return 0;
                return d.id == 1
                    ? 15
                    : sizing == "small"
                        ? 10
                        : sizing == "medium"
                            ? 12
                            : 15 || 20;
            })
            .attr("text-anchor", function (d) {
                // return "start";
                return d.id == 1 ? "end" : "start";
            })
            .attr("font-weight", "bold")
            .attr("font-size", function (d) {
                return d.id == 1
                    ? 16
                    : sizing == "small"
                        ? 8
                        : sizing == "medium"
                            ? 10
                            : 11;
            })
            .text(function (d) {
                var disp_txt = format_revenue_number(d.data.acc_counts);
                // if (d.depth == 0) {
                //   var prev_id = parse_url().searchKey.prev_id || "overall"
                //   update_url({ "prev_id": (prev_id != "overall" && disp_txt != "overall") ? _.join([prev_id, disp_txt], "-") : disp_txt })
                // }
                return sizing == "small" ? "" : `${disp_txt.replace(/\.0$/, "")}`;
            })
            .style("display", function () {
                return lab == "on" ? "" : "none";
            });
        // }
        // Add labels for the nodes

        // UPDATE
        var nodeUpdate = nodeEnter.merge(node);

        // Transition to the proper position for the node
        nodeUpdate
            .transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Update the node attributes and style
        nodeUpdate
            .select("circle.node")
            // .attr("r", 10)
            .attr("r", function (d) {
                return "name" in d.data
                    ? bubble_width(d.data.acc_counts)
                    : bubble_width(d.data.acc_counts) + 15;
            })
            .style("fill", function (d) {
                var names =
                    d.data.name != undefined
                        ? d.data.name.replace(/ /g, "_").replace(/[0-9]-/, "")
                        : d.data.name;
                var url_strs = tree_clicked_url ? tree_clicked_url.split("-") : "";
                if (_.includes(url_strs, names) && (g_redrw || depth_var < d.depth)) {
                    g_redrw = false;
                    depth_var = d.depth;
                    click(d, $(this).parent());
                }
                return d.data.color || "#00447C";
                // return d._children ? "lightsteelblue" : "#fff";
            })
            .attr("cursor", "pointer");

        // Remove any exiting nodes
        var nodeExit = node
            .exit()
            .transition()
            .duration(duration)
            .attr("class", "pointer-events-none")
            .attr("transform", function () {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        // On exit reduce the node circles size to 0
        nodeExit.select("circle").attr("r", function (d) {
            return bubble_width(d.data.acc_counts) || 10;
        });
        // .attr("r", 1e-6);

        // On exit reduce the opacity of text labels
        nodeExit.select("text").style("fill-opacity", 1e-6);
    }

    function tool_child(d) {
        return `
      <p class="font-weight-bold mb-1 p-13 text-capitalize">${d.data.name ? d.data.name : "Overall"
            }</p></b> Leads: <b>${format_revenue_number(d.data.acc_counts)}`;
    }
    // Toggle children on click.
    function click(d, c) {
        var curr_id = $(c).find("circle")[0].id;
        // If the node has a parent, then collapse its child nodes
        // except for this clicked node.
        if (d.parent) {
            d.parent.children.forEach(function (element) {
                if (d !== element) {
                    collapse(element);
                }
            });
        }
        if (d.children) {
            d._children = d.children;
            d.children = null;
            var curr_url_id = _.filter(
                parse_url().searchKey.tree_clicked.split("-"),
                (k) => k != d.data.name
            );
            curr_url_id = curr_url_id.length == 0 ? null : curr_url_id.join("-");
            update_url({ tree_clicked: curr_url_id });
            update_png_url();
        } else {
            d.children = d._children;
            d._children = null;
            update_url({ tree_clicked: curr_id });
            update_png_url();
        }
        update(d);
    }

    function update_png_url() {
        let sectional_name = get_sectional_name([
            $("#dropdownMenuButton-2-b2b").text().trim(),
        ]);
        let sec2_file_name = sectional_name;
        let download_png_url =
            "/capture?ext=png&width=1366&height=800&delay=2000&selector=.sec2_charts&url=" +
            encodeURIComponent(location.href) +
            "&dwnld=true&file=Leads Summary_" +
            sec2_file_name;
        $("#sec2_png").attr("href", download_png_url);
    }

    function dbl_click(d) {
        d3.event.preventDefault();
        if (d.data.children.length == 0) {
            return;
        }
        var sel_level = d.data.type || "overall",
            hier_ord = _.map($(".jqdndLoaded").children(), function (i) {
                return $(i).val();
            }),
            segment = parse_url().searchKey.segment || "1",
            tmp_hier_ord,
            filt_data;
        if (segment !== "2") {
            hier_ord = _.without(hier_ord, "rtms");
        }
        update_url({ parent_tree: sel_level, parent_id: d.data.id });
        // var prev_id = parse_url().searchKey.prev_id || 'overall'
        $("#weighted_tree").empty();
        if (sel_level !== "overall") {
            // sel_level = d.data.children.length ==0? d.data.type : d.data.children[0].type
            // hier_ord = parse_url().searchList.tree_ord
            tmp_hier_ord = hier_ord.slice(_.indexOf(hier_ord, sel_level) + 1);
            _.each(
                hier_ord.slice(0, _.indexOf(hier_ord, sel_level)),
                function (btn_val) {
                    $("button[value='" + btn_val + "']").hide();
                }
            );
            _.each(tmp_hier_ord, function (btn_val) {
                $("button[value='" + btn_val + "']")
                    .removeClass("custom-color-btn-selected")
                    .addClass("custom-color-btn-deselected");
            });
            var selcted_bubb = parse_url().searchKey.parent_id || "overall";
            if (selcted_bubb !== "overall") {
                // var tmp = _.cloneDeep(hier_ord)
                // tmp.splice(hier_ord.indexOf(parse_url().searchKey.parent_tree || 0), 1)
                var tmp = selcted_bubb.split("-").length;
                if (tmp === 1) {
                    tmp = 1;
                }
                var flt_list = _.pickBy(
                    _.zipObject(hier_ord.slice(tmp, d.depth), selcted_bubb.split("-")),
                    undefined
                );
                // flt_list = _.pickBy(_.zipObject(hier_ord.slice(tmp, _.indexOf(hier_ord, sel_level)+1), selcted_bubb.split("-")), undefined)
                filt_data = _.filter(org_data, flt_list);
            }
            // weighted_tree_comp({"children":hirerachial_struct(org_data, tmp_hier_ord)}, "#weighted_tree", hier_ord, org_data)
        } else {
            _.each(hier_ord, function (btn_val) {
                $("button[value='" + btn_val + "']")
                    .removeClass("custom-color-btn-selected")
                    .addClass("custom-color-btn-deselected");
                $("button[value='" + btn_val + "']").show();
            });
            tmp_hier_ord = hier_ord;
            filt_data = org_data;
            sel_level = selcted_bubb = "overall";
        }
        if (filt_data.length === 0) {
            return;
        } else {
            $("button[value='" + tmp_hier_ord[0] + "']")
                .removeClass("custom-color-btn-deselected")
                .addClass("custom-color-btn-selected");
            var fwd_data = {
                children: hirerachial_struct(
                    filt_data,
                    sel_level === "overall" ? hier_ord : tmp_hier_ord
                ),
                type: "overall",
                id: "overall",
            };
            weighted_tree_comp(
                fwd_data,
                "#weighted_tree",
                hier_ord,
                org_data,
                def_hier_data
            );
        }
    }
    $("g.node").insertBefore(".link-0");
}

function truncateString(str, n) {
    if (str.length > n) {
        return str.substring(0, n) + "...";
    } else {
        return str;
    }
}
