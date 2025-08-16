############################################################################
############################################################################
###                                                                      ###
###                             NFL METADATA                             ###
###                                                                      ###
############################################################################
############################################################################

url_base <- "https://api.sleeper.app/v1/league/"

pull_nfl <- GET('https://api.sleeper.app/v1/state/nfl')
nfl <- fromJSON(rawToChar(pull_nfl$content))

nfl_week <- 1 : case_when(
  nfl$season_type %in% c('post', 'off') ~ 17,
  nfl$season_type %in% c('pre') ~ 1,
  TRUE ~ nfl$week
)
nfl_szn <- case_when(
  nfl$season_type %in% c('off') ~ nfl$previous_season,
  TRUE ~ nfl$season
) |> 
  as.character()

# source(paste0(here::here(), '/source/_global/0a_ids.R'))
# source(paste0(here::here(), '/source/_global/0b_stats.R'))

suppressWarnings(rm(pull_nfl, ids_file, ids_mod,
                    base_ids, ids_raw, ids_trim, pull_ids, v, i,
                    num_szn, stats_file, stats_mod))
gc()
