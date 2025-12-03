// this is an auto generated file, do not change this manually

import { ServiceFunction, ServiceFunctionTypes } from "@hakit/core";
declare module "@hakit/core" {
  export interface CustomSupportedServices<
    T extends ServiceFunctionTypes = "target",
  > {
    homeassistant: {
      // undefined
      savePersistentStates: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      stop: ServiceFunction<object, T, object>;
      // undefined
      restart: ServiceFunction<object, T, object>;
      // undefined
      checkConfig: ServiceFunction<object, T, object>;
      // undefined
      updateEntity: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
        }
      >;
      // undefined
      reloadCoreConfig: ServiceFunction<object, T, object>;
      // undefined
      setLocation: ServiceFunction<
        object,
        T,
        {
          //  @example 32.87336 @constraints  number: mode: box, min: -90, max: 90, step: any
          latitude: number;
          //  @example 117.22743 @constraints  number: mode: box, min: -180, max: 180, step: any
          longitude: number;
          //  @example 120 @constraints  number: mode: box, step: any
          elevation?: number;
        }
      >;
      // undefined
      reloadCustomTemplates: ServiceFunction<object, T, object>;
      // undefined
      reloadConfigEntry: ServiceFunction<
        object,
        T,
        {
          //  @example 8955375327824e14ba89e4b29cc3ec9a @constraints  config_entry:
          entry_id?: unknown;
        }
      >;
      // undefined
      reloadAll: ServiceFunction<object, T, object>;
    };
    persistentNotification: {
      // undefined
      create: ServiceFunction<
        object,
        T,
        {
          //  @example Please check your configuration.yaml.
          message: string;
          //  @example Test notification
          title?: string;
          //  @example 1234
          notification_id?: string;
        }
      >;
      // undefined
      dismiss: ServiceFunction<
        object,
        T,
        {
          //  @example 1234
          notification_id: string;
        }
      >;
      // undefined
      dismissAll: ServiceFunction<object, T, object>;
    };
    systemLog: {
      // undefined
      clear: ServiceFunction<object, T, object>;
      // undefined
      write: ServiceFunction<
        object,
        T,
        {
          //  @example Something went wrong
          message: string;
          //
          level?: "debug" | "info" | "warning" | "error" | "critical";
          //  @example mycomponent.myplatform
          logger?: string;
        }
      >;
    };
    logger: {
      // undefined
      setDefaultLevel: ServiceFunction<
        object,
        T,
        {
          //
          level?: "debug" | "info" | "warning" | "error" | "fatal" | "critical";
        }
      >;
      // undefined
      setLevel: ServiceFunction<object, T, object>;
    };
    frontend: {
      // undefined
      setTheme: ServiceFunction<
        object,
        T,
        {
          //  @example default
          name: string;
          //
          mode?: "dark" | "light";
        }
      >;
      // undefined
      reloadThemes: ServiceFunction<object, T, object>;
    };
    recorder: {
      // undefined
      purge: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 365, unit_of_measurement: days, step: 1, mode: slider
          keep_days?: number;
          //  @constraints  boolean:
          repack?: boolean;
          //  @constraints  boolean:
          apply_filter?: boolean;
        }
      >;
      // undefined
      purgeEntities: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
          //  @example sun @constraints  object: multiple: false
          domains?: object;
          //  @example domain*.object_id* @constraints  object: multiple: false
          entity_globs?: object;
          //  @constraints  number: min: 0, max: 365, unit_of_measurement: days, step: 1, mode: slider
          keep_days?: number;
        }
      >;
      // undefined
      enable: ServiceFunction<object, T, object>;
      // undefined
      disable: ServiceFunction<object, T, object>;
      // undefined
      getStatistics: ServiceFunction<
        object,
        T,
        {
          //  @example 2025-01-01 00:00:00 @constraints  datetime:
          start_time: string;
          //  @example 2025-01-02 00:00:00 @constraints  datetime:
          end_time?: string;
          //  @example sensor.energy_consumption,sensor.temperature @constraints  statistic: multiple: true
          statistic_ids: unknown;
          //  @example hour
          period: "5minute" | "hour" | "day" | "week" | "month";
          //  @example mean,sum
          types:
            | "change"
            | "last_reset"
            | "max"
            | "mean"
            | "min"
            | "state"
            | "sum";
          //  @example [object Object] @constraints  object: multiple: false
          units?: object;
        }
      >;
    };
    hassio: {
      // undefined
      addonStart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonStop: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonRestart: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      addonStdin: ServiceFunction<
        object,
        T,
        {
          //  @example core_ssh @constraints  addon:
          addon: string;
        }
      >;
      // undefined
      hostShutdown: ServiceFunction<object, T, object>;
      // undefined
      hostReboot: ServiceFunction<object, T, object>;
      // undefined
      backupFull: ServiceFunction<
        object,
        T,
        {
          //  @example Backup 1
          name?: string;
          //  @example password
          password?: string;
          //  @constraints  boolean:
          compressed?: boolean;
          //  @example my_backup_mount @constraints  backup_location:
          location?: string;
          //  @constraints  boolean:
          homeassistant_exclude_database?: boolean;
        }
      >;
      // undefined
      backupPartial: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          homeassistant?: boolean;
          //  @constraints  boolean:
          homeassistant_exclude_database?: boolean;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          addons?: object;
          //  @example homeassistant,share @constraints  object: multiple: false
          folders?: object;
          //  @example Partial backup 1
          name?: string;
          //  @example password
          password?: string;
          //  @constraints  boolean:
          compressed?: boolean;
          //  @example my_backup_mount @constraints  backup_location:
          location?: string;
        }
      >;
      // undefined
      restoreFull: ServiceFunction<
        object,
        T,
        {
          //
          slug: string;
          //  @example password
          password?: string;
        }
      >;
      // undefined
      restorePartial: ServiceFunction<
        object,
        T,
        {
          //
          slug: string;
          //  @constraints  boolean:
          homeassistant?: boolean;
          //  @example homeassistant,share @constraints  object: multiple: false
          folders?: object;
          //  @example core_ssh,core_samba,core_mosquitto @constraints  object: multiple: false
          addons?: object;
          //  @example password
          password?: string;
        }
      >;
    };
    ffmpeg: {
      // undefined
      start: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
      // undefined
      stop: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
      // undefined
      restart: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
        }
      >;
    };
    switch: {
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    update: {
      // undefined
      install: ServiceFunction<
        object,
        T,
        {
          //  @example 1.0.0
          version?: string;
          //  @constraints  boolean:
          backup?: boolean;
        }
      >;
      // undefined
      skip: ServiceFunction<object, T, object>;
      // undefined
      clearSkipped: ServiceFunction<object, T, object>;
    };
    backup: {
      // undefined
      createAutomatic: ServiceFunction<object, T, object>;
    };
    tts: {
      // undefined
      speak: ServiceFunction<
        object,
        T,
        {
          //
          media_player_entity_id: string;
          //  @example My name is hanna
          message: string;
          //  @constraints  boolean:
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific @constraints  object: multiple: false
          options?: object;
        }
      >;
      // undefined
      clearCache: ServiceFunction<object, T, object>;
      // Say something using text-to-speech on a media player with cloud.
      cloudSay: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example My name is hanna
          message: string;
          //
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific
          options?: object;
        }
      >;
    };
    conversation: {
      // undefined
      process: ServiceFunction<
        object,
        T,
        {
          //  @example Turn all lights on
          text: string;
          //  @example NL
          language?: string;
          //  @example homeassistant @constraints  conversation_agent:
          agent_id?: string;
          //  @example my_conversation_1
          conversation_id?: string;
        }
      >;
      // undefined
      reload: ServiceFunction<
        object,
        T,
        {
          //  @example NL
          language?: string;
          //  @example homeassistant @constraints  conversation_agent:
          agent_id?: string;
        }
      >;
    };
    cloud: {
      // undefined
      remoteConnect: ServiceFunction<object, T, object>;
      // undefined
      remoteDisconnect: ServiceFunction<object, T, object>;
    };
    camera: {
      // undefined
      enableMotionDetection: ServiceFunction<object, T, object>;
      // undefined
      disableMotionDetection: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      snapshot: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/snapshot_{{ entity_id.name }}.jpg
          filename: string;
        }
      >;
      // undefined
      playStream: ServiceFunction<
        object,
        T,
        {
          //
          media_player: string;
          //
          format?: "hls";
        }
      >;
      // undefined
      record: ServiceFunction<
        object,
        T,
        {
          //  @example /tmp/snapshot_{{ entity_id.name }}.mp4
          filename: string;
          //  @constraints  number: min: 1, max: 3600, unit_of_measurement: seconds, step: 1, mode: slider
          duration?: number;
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          lookback?: number;
        }
      >;
    };
    scene: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      apply: ServiceFunction<
        object,
        T,
        {
          //  @example light.kitchen: 'on' light.ceiling:   state: 'on'   brightness: 80  @constraints  object: multiple: false
          entities: object;
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
        }
      >;
      // undefined
      create: ServiceFunction<
        object,
        T,
        {
          //  @example all_lights
          scene_id: string;
          //  @example light.tv_back_light: 'on' light.ceiling:   state: 'on'   brightness: 200  @constraints  object: multiple: false
          entities?: object;
          //  @example - light.ceiling - light.kitchen
          snapshot_entities?: string;
        }
      >;
      // undefined
      delete: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
        }
      >;
    };
    logbook: {
      // undefined
      log: ServiceFunction<
        object,
        T,
        {
          //  @example Kitchen
          name: string;
          //  @example is being used
          message: string;
          //
          entity_id?: string;
          //  @example light
          domain?: string;
        }
      >;
    };
    inputSelect: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      selectFirst: ServiceFunction<object, T, object>;
      // undefined
      selectLast: ServiceFunction<object, T, object>;
      // undefined
      selectNext: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectOption: ServiceFunction<
        object,
        T,
        {
          //  @example 'Item A' @constraints  state: hide_states: unavailable,unknown, multiple: false
          option: unknown;
        }
      >;
      // undefined
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      setOptions: ServiceFunction<
        object,
        T,
        {
          //  @example ['Item A', 'Item B', 'Item C']
          options: string;
        }
      >;
    };
    inputNumber: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, step: 0.001, mode: box
          value: number;
        }
      >;
      // undefined
      increment: ServiceFunction<object, T, object>;
      // undefined
      decrement: ServiceFunction<object, T, object>;
    };
    inputButton: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      press: ServiceFunction<object, T, object>;
    };
    script: {
      //
      startWatchingBeamer: ServiceFunction<object, T, object>;
      //
      stopWatchingBeamer: ServiceFunction<object, T, object>;
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    zone: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    automation: {
      // undefined
      trigger: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          skip_condition?: boolean;
        }
      >;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          stop_actions?: boolean;
        }
      >;
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    inputBoolean: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
    };
    timer: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      start: ServiceFunction<
        object,
        T,
        {
          //  @example 00:01:00 or 60
          duration?: string;
        }
      >;
      // undefined
      pause: ServiceFunction<object, T, object>;
      // undefined
      cancel: ServiceFunction<object, T, object>;
      // undefined
      finish: ServiceFunction<object, T, object>;
      // undefined
      change: ServiceFunction<
        object,
        T,
        {
          //  @example 00:01:00, 60 or -60
          duration: string;
        }
      >;
    };
    person: {
      // undefined
      reload: ServiceFunction<object, T, object>;
    };
    remote: {
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @example BedroomTV
          activity?: string;
        }
      >;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      sendCommand: ServiceFunction<
        object,
        T,
        {
          //  @example 32756745
          device?: string;
          //  @example Play @constraints  object: multiple: false
          command: object;
          //  @constraints  number: min: 0, max: 255, step: 1, mode: slider
          num_repeats?: number;
          //  @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds, mode: slider
          delay_secs?: number;
          //  @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds, mode: slider
          hold_secs?: number;
        }
      >;
      // undefined
      learnCommand: ServiceFunction<
        object,
        T,
        {
          //  @example television
          device?: string;
          //  @example Turn on @constraints  object: multiple: false
          command?: object;
          //
          command_type?: "ir" | "rf";
          //  @constraints  boolean:
          alternative?: boolean;
          //  @constraints  number: min: 0, max: 60, step: 5, unit_of_measurement: seconds, mode: slider
          timeout?: number;
        }
      >;
      // undefined
      deleteCommand: ServiceFunction<
        object,
        T,
        {
          //  @example television
          device?: string;
          //  @example Mute @constraints  object: multiple: false
          command: object;
        }
      >;
    };
    assistSatellite: {
      // undefined
      announce: ServiceFunction<
        object,
        T,
        {
          //  @example Time to wake up!
          message?: string;
          //  @constraints  media: accept: audio/*
          media_id?: unknown;
          //  @constraints  boolean:
          preannounce?: boolean;
          //  @constraints  media: accept: audio/*
          preannounce_media_id?: unknown;
        }
      >;
      // undefined
      startConversation: ServiceFunction<
        object,
        T,
        {
          //  @example You left the lights on in the living room. Turn them off?
          start_message?: string;
          //  @constraints  media: accept: audio/*
          start_media_id?: unknown;
          //
          extra_system_prompt?: string;
          //  @constraints  boolean:
          preannounce?: boolean;
          //  @constraints  media: accept: audio/*
          preannounce_media_id?: unknown;
        }
      >;
      // undefined
      askQuestion: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example What kind of music would you like to play?
          question?: string;
          //  @constraints  media: accept: audio/*
          question_media_id?: unknown;
          //  @constraints  boolean:
          preannounce?: boolean;
          //  @constraints  media: accept: audio/*
          preannounce_media_id?: unknown;
          //  @constraints  object: label_field: sentences, description_field: id, multiple: true, translation_key: answers, fields: [object Object]
          answers?: object;
        }
      >;
    };
    hue: {
      // undefined
      hueActivateScene: ServiceFunction<
        object,
        T,
        {
          //  @example Living Room
          group_name?: string;
          //  @example Energize
          scene_name?: string;
          //  @constraints  boolean:
          dynamic?: boolean;
        }
      >;
      // undefined
      activateScene: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 3600, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //  @constraints  boolean:
          dynamic?: boolean;
          //  @constraints  number: min: 0, max: 100, step: 1, mode: slider
          speed?: number;
          //  @constraints  number: min: 1, max: 255, step: 1, mode: slider
          brightness?: number;
        }
      >;
    };
    file: {
      // undefined
      readFile: ServiceFunction<
        object,
        T,
        {
          //  @example www/my_file.json
          file_name?: string;
          //  @example JSON
          file_encoding?: "JSON" | "YAML";
        }
      >;
    };
    inputText: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example This is an example text
          value: string;
        }
      >;
    };
    shoppingList: {
      // undefined
      addItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      removeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      completeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      incompleteItem: ServiceFunction<
        object,
        T,
        {
          //  @example Beer
          name: string;
        }
      >;
      // undefined
      completeAll: ServiceFunction<object, T, object>;
      // undefined
      incompleteAll: ServiceFunction<object, T, object>;
      // undefined
      clearCompletedItems: ServiceFunction<object, T, object>;
      // undefined
      sort: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          reverse?: boolean;
        }
      >;
    };
    cast: {
      // undefined
      showLovelaceView: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example lovelace-cast
          dashboard_path?: string;
          //  @example downstairs
          view_path: string;
        }
      >;
    };
    sonos: {
      // undefined
      snapshot: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
          //  @constraints  boolean:
          with_group?: boolean;
        }
      >;
      // undefined
      restore: ServiceFunction<
        object,
        T,
        {
          //
          entity_id?: string;
          //  @constraints  boolean:
          with_group?: boolean;
        }
      >;
      // undefined
      setSleepTimer: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 7200, unit_of_measurement: seconds, step: 1, mode: slider
          sleep_time?: number;
        }
      >;
      // undefined
      clearSleepTimer: ServiceFunction<object, T, object>;
      // undefined
      updateAlarm: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 1, max: 1440, mode: box, step: 1
          alarm_id: number;
          //  @example 07:00 @constraints  time:
          time?: string;
          //  @constraints  number: min: 0, max: 1, step: 0.01, mode: slider
          volume?: number;
          //  @constraints  boolean:
          enabled?: boolean;
          //  @constraints  boolean:
          include_linked_zones?: boolean;
        }
      >;
      // undefined
      playQueue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 10000, mode: box, step: 1
          queue_position?: number;
        }
      >;
      // undefined
      removeFromQueue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 10000, mode: box, step: 1
          queue_position?: number;
        }
      >;
      // undefined
      getQueue: ServiceFunction<object, T, object>;
    };
    tado: {
      // undefined
      addMeterReading: ServiceFunction<
        object,
        T,
        {
          //  @constraints  config_entry: integration: tado
          config_entry: unknown;
          //  @constraints  number: mode: box, min: 0, step: 1
          reading: number;
        }
      >;
      // undefined
      setWaterHeaterTimer: ServiceFunction<
        object,
        T,
        {
          //  @example 01:30:00
          time_period: string;
          //  @constraints  number: min: 0, max: 100, step: 0.5, unit_of_measurement: °, mode: slider
          temperature?: number;
        }
      >;
      // undefined
      setClimateTimer: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 100, step: 0.5, unit_of_measurement: °, mode: slider
          temperature: number;
          //  @example 01:30:00
          time_period?: string;
          //  @example MANUAL
          requested_overlay?: "NEXT_TIME_BLOCK" | "MANUAL" | "TADO_DEFAULT";
        }
      >;
      // undefined
      setClimateTemperatureOffset: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: -10, max: 10, step: 0.01, unit_of_measurement: °, mode: slider
          offset?: number;
        }
      >;
    };
    counter: {
      // undefined
      increment: ServiceFunction<object, T, object>;
      // undefined
      decrement: ServiceFunction<object, T, object>;
      // undefined
      reset: ServiceFunction<object, T, object>;
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, mode: box, step: 1
          value: number;
        }
      >;
    };
    schedule: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      getSchedule: ServiceFunction<object, T, object>;
    };
    inputDatetime: {
      // undefined
      reload: ServiceFunction<object, T, object>;
      // undefined
      setDatetime: ServiceFunction<
        object,
        T,
        {
          //  @example '2019-04-20'
          date?: string;
          //  @example '05:04:20' @constraints  time:
          time?: string;
          //  @example '2019-04-20 05:04:20'
          datetime?: string;
          //  @constraints  number: min: 0, max: 9223372036854776000, mode: box, step: 1
          timestamp?: number;
        }
      >;
    };
    notify: {
      // undefined
      sendMessage: ServiceFunction<
        object,
        T,
        {
          //
          message: string;
          //
          title?: string;
        }
      >;
      // undefined
      persistentNotification: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific @constraints  object: multiple: false
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_pixel_9_pro integration.
      mobileAppPixel9Pro: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the notify service.
      notify: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
    };
    deviceTracker: {
      // undefined
      see: ServiceFunction<
        object,
        T,
        {
          //  @example FF:FF:FF:FF:FF:FF
          mac?: string;
          //  @example phonedave
          dev_id?: string;
          //  @example Dave
          host_name?: string;
          //  @example home
          location_name?: string;
          //  @example [51.509802, -0.086692] @constraints  object: multiple: false
          gps?: object;
          //  @constraints  number: min: 0, mode: box, unit_of_measurement: m, step: 1
          gps_accuracy?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          battery?: number;
        }
      >;
    };
    todo: {
      // undefined
      addItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
          //  @example 2023-11-17 @constraints  date:
          due_date?: string;
          //  @example 2023-11-17 13:30:00 @constraints  datetime:
          due_datetime?: string;
          //  @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // undefined
      updateItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
          //  @example Something else
          rename?: string;
          //  @example needs_action
          status?: "needs_action" | "completed";
          //  @example 2023-11-17 @constraints  date:
          due_date?: string;
          //  @example 2023-11-17 13:30:00 @constraints  datetime:
          due_datetime?: string;
          //  @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // undefined
      removeItem: ServiceFunction<
        object,
        T,
        {
          //  @example Submit income tax return
          item: string;
        }
      >;
      // undefined
      getItems: ServiceFunction<
        object,
        T,
        {
          //  @example needs_action
          status?: "needs_action" | "completed";
        }
      >;
      // undefined
      removeCompletedItems: ServiceFunction<object, T, object>;
    };
    mediaPlayer: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      volumeUp: ServiceFunction<object, T, object>;
      // undefined
      volumeDown: ServiceFunction<object, T, object>;
      // undefined
      mediaPlayPause: ServiceFunction<object, T, object>;
      // undefined
      mediaPlay: ServiceFunction<object, T, object>;
      // undefined
      mediaPause: ServiceFunction<object, T, object>;
      // undefined
      mediaStop: ServiceFunction<object, T, object>;
      // undefined
      mediaNextTrack: ServiceFunction<object, T, object>;
      // undefined
      mediaPreviousTrack: ServiceFunction<object, T, object>;
      // undefined
      clearPlaylist: ServiceFunction<object, T, object>;
      // undefined
      volumeSet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 1, step: 0.01, mode: slider
          volume_level: number;
        }
      >;
      // undefined
      volumeMute: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          is_volume_muted: boolean;
        }
      >;
      // undefined
      mediaSeek: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 9223372036854776000, step: 0.01, mode: box
          seek_position: number;
        }
      >;
      // undefined
      join: ServiceFunction<
        object,
        T,
        {
          //  @example - media_player.multiroom_player2 - media_player.multiroom_player3
          group_members: string[];
        }
      >;
      // undefined
      selectSource: ServiceFunction<
        object,
        T,
        {
          //  @example video1
          source: string;
        }
      >;
      // undefined
      selectSoundMode: ServiceFunction<
        object,
        T,
        {
          //  @example Music
          sound_mode?: string;
        }
      >;
      // undefined
      playMedia: ServiceFunction<
        object,
        T,
        {
          //  @example {'media_content_id': 'https://home-assistant.io/images/cast/splash.png', 'media_content_type': 'music'} @constraints  media:
          media: unknown;
          //
          enqueue?: "play" | "next" | "add" | "replace";
          //  @example true @constraints  boolean:
          announce?: boolean;
        }
      >;
      // undefined
      browseMedia: ServiceFunction<
        object,
        T,
        {
          //  @example music
          media_content_type?: string;
          //  @example A:ALBUMARTIST/Beatles
          media_content_id?: string | number;
        }
      >;
      // undefined
      searchMedia: ServiceFunction<
        object,
        T,
        {
          //  @example Beatles
          search_query: string;
          //  @example music
          media_content_type?: string;
          //  @example A:ALBUMARTIST/Beatles
          media_content_id?: string | number;
          //  @example album,artist
          media_filter_classes?: string;
        }
      >;
      // undefined
      shuffleSet: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          shuffle: boolean;
        }
      >;
      // undefined
      unjoin: ServiceFunction<object, T, object>;
      // undefined
      repeatSet: ServiceFunction<
        object,
        T,
        {
          //
          repeat: "off" | "all" | "one";
        }
      >;
    };
    light: {
      // undefined
      turnOn: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //  @example [255, 100, 100] @constraints  color_rgb:
          rgb_color?: [number, number, number];
          //  @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_pct?: number;
          //  @constraints  number: min: -100, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_step_pct?: number;
          //
          effect?: string;
          //  @example [255, 100, 100, 50] @constraints  object: multiple: false
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70] @constraints  object: multiple: false
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | "homeassistant"
            | "aliceblue"
            | "antiquewhite"
            | "aqua"
            | "aquamarine"
            | "azure"
            | "beige"
            | "bisque"
            | "blanchedalmond"
            | "blue"
            | "blueviolet"
            | "brown"
            | "burlywood"
            | "cadetblue"
            | "chartreuse"
            | "chocolate"
            | "coral"
            | "cornflowerblue"
            | "cornsilk"
            | "crimson"
            | "cyan"
            | "darkblue"
            | "darkcyan"
            | "darkgoldenrod"
            | "darkgray"
            | "darkgreen"
            | "darkgrey"
            | "darkkhaki"
            | "darkmagenta"
            | "darkolivegreen"
            | "darkorange"
            | "darkorchid"
            | "darkred"
            | "darksalmon"
            | "darkseagreen"
            | "darkslateblue"
            | "darkslategray"
            | "darkslategrey"
            | "darkturquoise"
            | "darkviolet"
            | "deeppink"
            | "deepskyblue"
            | "dimgray"
            | "dimgrey"
            | "dodgerblue"
            | "firebrick"
            | "floralwhite"
            | "forestgreen"
            | "fuchsia"
            | "gainsboro"
            | "ghostwhite"
            | "gold"
            | "goldenrod"
            | "gray"
            | "green"
            | "greenyellow"
            | "grey"
            | "honeydew"
            | "hotpink"
            | "indianred"
            | "indigo"
            | "ivory"
            | "khaki"
            | "lavender"
            | "lavenderblush"
            | "lawngreen"
            | "lemonchiffon"
            | "lightblue"
            | "lightcoral"
            | "lightcyan"
            | "lightgoldenrodyellow"
            | "lightgray"
            | "lightgreen"
            | "lightgrey"
            | "lightpink"
            | "lightsalmon"
            | "lightseagreen"
            | "lightskyblue"
            | "lightslategray"
            | "lightslategrey"
            | "lightsteelblue"
            | "lightyellow"
            | "lime"
            | "limegreen"
            | "linen"
            | "magenta"
            | "maroon"
            | "mediumaquamarine"
            | "mediumblue"
            | "mediumorchid"
            | "mediumpurple"
            | "mediumseagreen"
            | "mediumslateblue"
            | "mediumspringgreen"
            | "mediumturquoise"
            | "mediumvioletred"
            | "midnightblue"
            | "mintcream"
            | "mistyrose"
            | "moccasin"
            | "navajowhite"
            | "navy"
            | "navyblue"
            | "oldlace"
            | "olive"
            | "olivedrab"
            | "orange"
            | "orangered"
            | "orchid"
            | "palegoldenrod"
            | "palegreen"
            | "paleturquoise"
            | "palevioletred"
            | "papayawhip"
            | "peachpuff"
            | "peru"
            | "pink"
            | "plum"
            | "powderblue"
            | "purple"
            | "red"
            | "rosybrown"
            | "royalblue"
            | "saddlebrown"
            | "salmon"
            | "sandybrown"
            | "seagreen"
            | "seashell"
            | "sienna"
            | "silver"
            | "skyblue"
            | "slateblue"
            | "slategray"
            | "slategrey"
            | "snow"
            | "springgreen"
            | "steelblue"
            | "tan"
            | "teal"
            | "thistle"
            | "tomato"
            | "turquoise"
            | "violet"
            | "wheat"
            | "white"
            | "whitesmoke"
            | "yellow"
            | "yellowgreen";
          //  @example [300, 70] @constraints  object: multiple: false
          hs_color?: [number, number];
          //  @example [0.52, 0.43] @constraints  object: multiple: false
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number;
          //  @constraints  number: min: 0, max: 255, step: 1, mode: slider
          brightness?: number;
          //  @constraints  number: min: -225, max: 255, step: 1, mode: slider
          brightness_step?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: "long" | "short";
        }
      >;
      // undefined
      turnOff: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //
          flash?: "long" | "short";
        }
      >;
      // undefined
      toggle: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 300, unit_of_measurement: seconds, step: 1, mode: slider
          transition?: number;
          //  @example [255, 100, 100] @constraints  color_rgb:
          rgb_color?: [number, number, number];
          //  @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: number;
          //  @constraints  number: min: 0, max: 100, unit_of_measurement: %, step: 1, mode: slider
          brightness_pct?: number;
          //
          effect?: string;
          //  @example [255, 100, 100, 50] @constraints  object: multiple: false
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70] @constraints  object: multiple: false
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | "homeassistant"
            | "aliceblue"
            | "antiquewhite"
            | "aqua"
            | "aquamarine"
            | "azure"
            | "beige"
            | "bisque"
            | "blanchedalmond"
            | "blue"
            | "blueviolet"
            | "brown"
            | "burlywood"
            | "cadetblue"
            | "chartreuse"
            | "chocolate"
            | "coral"
            | "cornflowerblue"
            | "cornsilk"
            | "crimson"
            | "cyan"
            | "darkblue"
            | "darkcyan"
            | "darkgoldenrod"
            | "darkgray"
            | "darkgreen"
            | "darkgrey"
            | "darkkhaki"
            | "darkmagenta"
            | "darkolivegreen"
            | "darkorange"
            | "darkorchid"
            | "darkred"
            | "darksalmon"
            | "darkseagreen"
            | "darkslateblue"
            | "darkslategray"
            | "darkslategrey"
            | "darkturquoise"
            | "darkviolet"
            | "deeppink"
            | "deepskyblue"
            | "dimgray"
            | "dimgrey"
            | "dodgerblue"
            | "firebrick"
            | "floralwhite"
            | "forestgreen"
            | "fuchsia"
            | "gainsboro"
            | "ghostwhite"
            | "gold"
            | "goldenrod"
            | "gray"
            | "green"
            | "greenyellow"
            | "grey"
            | "honeydew"
            | "hotpink"
            | "indianred"
            | "indigo"
            | "ivory"
            | "khaki"
            | "lavender"
            | "lavenderblush"
            | "lawngreen"
            | "lemonchiffon"
            | "lightblue"
            | "lightcoral"
            | "lightcyan"
            | "lightgoldenrodyellow"
            | "lightgray"
            | "lightgreen"
            | "lightgrey"
            | "lightpink"
            | "lightsalmon"
            | "lightseagreen"
            | "lightskyblue"
            | "lightslategray"
            | "lightslategrey"
            | "lightsteelblue"
            | "lightyellow"
            | "lime"
            | "limegreen"
            | "linen"
            | "magenta"
            | "maroon"
            | "mediumaquamarine"
            | "mediumblue"
            | "mediumorchid"
            | "mediumpurple"
            | "mediumseagreen"
            | "mediumslateblue"
            | "mediumspringgreen"
            | "mediumturquoise"
            | "mediumvioletred"
            | "midnightblue"
            | "mintcream"
            | "mistyrose"
            | "moccasin"
            | "navajowhite"
            | "navy"
            | "navyblue"
            | "oldlace"
            | "olive"
            | "olivedrab"
            | "orange"
            | "orangered"
            | "orchid"
            | "palegoldenrod"
            | "palegreen"
            | "paleturquoise"
            | "palevioletred"
            | "papayawhip"
            | "peachpuff"
            | "peru"
            | "pink"
            | "plum"
            | "powderblue"
            | "purple"
            | "red"
            | "rosybrown"
            | "royalblue"
            | "saddlebrown"
            | "salmon"
            | "sandybrown"
            | "seagreen"
            | "seashell"
            | "sienna"
            | "silver"
            | "skyblue"
            | "slateblue"
            | "slategray"
            | "slategrey"
            | "snow"
            | "springgreen"
            | "steelblue"
            | "tan"
            | "teal"
            | "thistle"
            | "tomato"
            | "turquoise"
            | "violet"
            | "wheat"
            | "white"
            | "whitesmoke"
            | "yellow"
            | "yellowgreen";
          //  @example [300, 70] @constraints  object: multiple: false
          hs_color?: [number, number];
          //  @example [0.52, 0.43] @constraints  object: multiple: false
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number;
          //  @constraints  number: min: 0, max: 255, step: 1, mode: slider
          brightness?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: "long" | "short";
        }
      >;
    };
    number: {
      // undefined
      setValue: ServiceFunction<
        object,
        T,
        {
          //  @example 42
          value: string;
        }
      >;
    };
    select: {
      // undefined
      selectFirst: ServiceFunction<object, T, object>;
      // undefined
      selectLast: ServiceFunction<object, T, object>;
      // undefined
      selectNext: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
      // undefined
      selectOption: ServiceFunction<
        object,
        T,
        {
          //  @example 'Item A' @constraints  state: hide_states: unavailable,unknown, multiple: false
          option: unknown;
        }
      >;
      // undefined
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          cycle?: boolean;
        }
      >;
    };
    weather: {
      // undefined
      getForecasts: ServiceFunction<
        object,
        T,
        {
          //
          type: "daily" | "hourly" | "twice_daily";
        }
      >;
    };
    climate: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      toggle: ServiceFunction<object, T, object>;
      // undefined
      setHvacMode: ServiceFunction<
        object,
        T,
        {
          //  @constraints  state: hide_states: unavailable,unknown, multiple: false
          hvac_mode?: unknown;
        }
      >;
      // undefined
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          //  @example away
          preset_mode: string;
        }
      >;
      // undefined
      setTemperature: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          temperature?: number;
          //  @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_high?: number;
          //  @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_low?: number;
          //
          hvac_mode?:
            | "off"
            | "auto"
            | "cool"
            | "dry"
            | "fan_only"
            | "heat_cool"
            | "heat";
        }
      >;
      // undefined
      setHumidity: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 30, max: 99, unit_of_measurement: %, step: 1, mode: slider
          humidity: number;
        }
      >;
      // undefined
      setFanMode: ServiceFunction<
        object,
        T,
        {
          //  @example low
          fan_mode: string;
        }
      >;
      // undefined
      setSwingMode: ServiceFunction<
        object,
        T,
        {
          //  @example on
          swing_mode: string;
        }
      >;
      // undefined
      setSwingHorizontalMode: ServiceFunction<
        object,
        T,
        {
          //  @example on
          swing_horizontal_mode: string;
        }
      >;
    };
    waterHeater: {
      // undefined
      turnOn: ServiceFunction<object, T, object>;
      // undefined
      turnOff: ServiceFunction<object, T, object>;
      // undefined
      setAwayMode: ServiceFunction<
        object,
        T,
        {
          //  @constraints  boolean:
          away_mode: boolean;
        }
      >;
      // undefined
      setTemperature: ServiceFunction<
        object,
        T,
        {
          //  @constraints  number: min: 0, max: 250, step: 0.5, mode: box, unit_of_measurement: °
          temperature: number;
          //  @example eco
          operation_mode?: string;
        }
      >;
      // undefined
      setOperationMode: ServiceFunction<
        object,
        T,
        {
          //  @example eco
          operation_mode: string;
        }
      >;
    };
  }
  export interface CustomEntityNameContainer {
    names:
      | "update.home_assistant_supervisor_update"
      | "update.home_assistant_core_update"
      | "update.whisper_update"
      | "update.terminal_ssh_update"
      | "update.samba_share_update"
      | "update.piper_update"
      | "update.mosquitto_broker_update"
      | "update.home_assistant_operating_system_update"
      | "conversation.home_assistant"
      | "event.backup_automatic_backup"
      | "sensor.backup_backup_manager_state"
      | "sensor.backup_next_scheduled_automatic_backup"
      | "sensor.backup_last_successful_automatic_backup"
      | "sensor.backup_last_attempted_automatic_backup"
      | "binary_sensor.remote_ui"
      | "stt.home_assistant_cloud"
      | "tts.home_assistant_cloud"
      | "script.start_watching_beamer"
      | "script.stop_watching_beamer"
      | "zone.home"
      | "person.sander"
      | "sun.sun"
      | "sensor.sun_next_dawn"
      | "sensor.sun_next_dusk"
      | "sensor.sun_next_midnight"
      | "sensor.sun_next_noon"
      | "sensor.sun_next_rising"
      | "sensor.sun_next_setting"
      | "remote.halo_2"
      | "tts.google_translate_en_com"
      | "device_tracker.pixel_9_pro"
      | "sensor.pixel_9_pro_battery_level"
      | "sensor.pixel_9_pro_battery_state"
      | "sensor.pixel_9_pro_charger_type"
      | "sensor.epson_printer"
      | "binary_sensor.router_wan_status"
      | "sensor.router_extern_ip"
      | "sensor.router_downloadsnelheid"
      | "sensor.router_uploadsnelheid"
      | "update.noctis_update"
      | "update.hacs_update"
      | "update.xgimi_projector_remote_update"
      | "todo.shopping_list"
      | "binary_sensor.hue_outdoor_motion_sensor_1_beweging"
      | "binary_sensor.wc_bewegingssensor_beweging"
      | "binary_sensor.veranda_sensor_beweging"
      | "binary_sensor.hue_motion_sensor_hal_beneden_beweging"
      | "binary_sensor.woonkamer"
      | "binary_sensor.muziekruimte"
      | "binary_sensor.toilet_beweging"
      | "binary_sensor.veranda_beweging"
      | "binary_sensor.hal_beweging"
      | "event.veranda_schakelaar_knop_2"
      | "event.slaapkamer_schakelaar_knop_1"
      | "event.woonkamer_schakelaar_knop_2"
      | "event.woonkamer_schakelaar_knop_1"
      | "event.woonkamer_schakelaar_knop_3"
      | "event.zolder_knop_knop_1"
      | "event.veranda_schakelaar_knop_4"
      | "event.veranda_schakelaar_knop_1"
      | "event.slaapkamer_schakelaar_knop_4"
      | "event.slaapkamer_schakelaar_knop_3"
      | "event.slaapkamer_schakelaar_knop_2"
      | "event.woonkamer_schakelaar_knop_4"
      | "event.veranda_schakelaar_knop_3"
      | "light.kantoor_sander"
      | "light.veranda"
      | "light.wc"
      | "light.kledingkamer"
      | "light.slaapkamer"
      | "light.wc_spot"
      | "light.hal_beneden"
      | "light.hue_iris"
      | "light.hue_play_links"
      | "light.salontafel"
      | "light.hue_play_rechts"
      | "light.eettafel"
      | "light.bank"
      | "light.hal_boven"
      | "light.woonkamer"
      | "light.hal"
      | "light.veranda_2"
      | "light.kantoor"
      | "light.slaapkamer_2"
      | "light.toilet"
      | "scene.veranda_ontspannen"
      | "scene.slaapkamer_lentebloesem"
      | "scene.woonkamer_nachtlampje"
      | "scene.slaapkamer_concentreren"
      | "scene.kantoor_nachtlampje"
      | "scene.woonkamer_gedimd"
      | "scene.woonkamer_arctische_dageraad"
      | "scene.slaapkamer_nachtlampje"
      | "scene.veranda_concentreren"
      | "scene.woonkamer_tropische_schemering"
      | "scene.hal_helder"
      | "scene.veranda_gedimd"
      | "scene.woonkamer_lentebloesem"
      | "scene.woonkamer_glooiende_heuvels"
      | "scene.slaapkamer_gedimd"
      | "scene.kantoor_gedimd"
      | "scene.toilet_gedimd"
      | "scene.slaapkamer_energie"
      | "scene.woonkamer_savannah_zon"
      | "scene.kantoor_helder"
      | "scene.woonkamer_helder"
      | "scene.slaapkamer_lezen"
      | "scene.hal_nachtlampje"
      | "scene.slaapkamer_tropische_schemering"
      | "scene.woonkamer_ontspannen"
      | "scene.slaapkamer_savanne_zonsondergang"
      | "scene.toilet_helder"
      | "scene.woonkamer_lezen"
      | "scene.slaapkamer_helder"
      | "scene.veranda_energie"
      | "scene.veranda_helder"
      | "scene.slaapkamer_arctische_dageraad"
      | "scene.veranda_nachtlampje"
      | "scene.slaapkamer_ontspannen"
      | "scene.hal_gedimd"
      | "scene.woonkamer_energie"
      | "scene.veranda_lezen"
      | "scene.woonkamer_concentreren"
      | "sensor.veranda_sensor_temperatuur"
      | "sensor.wc_bewegingssensor_temperatuur"
      | "sensor.hue_motion_sensor_hal_beneden_temperatuur"
      | "sensor.hue_outdoor_motion_sensor_1_temperatuur"
      | "sensor.hue_motion_sensor_hal_beneden_licht"
      | "sensor.veranda_sensor_licht"
      | "sensor.wc_bewegingssensor_licht"
      | "sensor.hue_outdoor_motion_sensor_1_licht"
      | "sensor.veranda_sensor_batterij"
      | "sensor.veranda_schakelaar_batterij"
      | "sensor.hue_motion_sensor_hal_beneden_batterij"
      | "sensor.wc_bewegingssensor_batterij"
      | "sensor.hue_outdoor_motion_sensor_1_batterij"
      | "sensor.slaapkamer_schakelaar_batterij"
      | "sensor.woonkamer_schakelaar_batterij"
      | "sensor.zolder_knop_batterij"
      | "sensor.hal_licht"
      | "sensor.veranda_licht"
      | "sensor.toilet_licht"
      | "switch.hue_outdoor_motion_sensor_1_bewegingssensor_ingeschakeld"
      | "switch.wc_bewegingssensor_bewegingssensor_ingeschakeld"
      | "switch.veranda_sensor_bewegingssensor_ingeschakeld"
      | "switch.hue_motion_sensor_hal_beneden_bewegingssensor_ingeschakeld"
      | "switch.hue_motion_sensor_hal_beneden_lichtsensor_ingeschakeld"
      | "switch.veranda_sensor_lichtsensor_ingeschakeld"
      | "switch.wc_bewegingssensor_lichtsensor_ingeschakeld"
      | "switch.hue_outdoor_motion_sensor_1_lichtsensor_ingeschakeld"
      | "switch.automation_hue_dimmer_switch_3"
      | "switch.automation_veranda_sensor"
      | "switch.automation_hue_dimmer_switch_1"
      | "switch.automation_woonkamer_schakelaar"
      | "switch.automation_state_after_streaming"
      | "switch.automation_wc_bewegingssensor"
      | "stt.faster_whisper"
      | "media_player.shield_2"
      | "remote.shield"
      | "media_player.slaapkamer_streamer_2"
      | "remote.slaapkamer_streamer"
      | "weather.forecast_thuis"
      | "sensor.io_series_6_7_1786_duur"
      | "sensor.io_series_6_7_1786_sectie"
      | "sensor.io_series_6_7_1786_aantal_secties"
      | "sensor.io_series_6_7_1786"
      | "sensor.io_series_6_7_1786_druk"
      | "sensor.io_series_6_7_1786_poetsstand"
      | "sensor.io_series_6_7_1786_batterij"
      | "binary_sensor.keuken_microphone"
      | "media_player.keuken"
      | "number.keuken_bass"
      | "number.keuken_balance"
      | "number.keuken_treble"
      | "switch.keuken_crossfade"
      | "switch.keuken_loudness"
      | "binary_sensor.badkamer_microphone"
      | "media_player.badkamer"
      | "number.badkamer_bass"
      | "number.badkamer_balance"
      | "number.badkamer_treble"
      | "switch.badkamer_crossfade"
      | "switch.badkamer_loudness"
      | "binary_sensor.thermostaatkraan_ib4164237056_connectiestatus"
      | "binary_sensor.thermostaatkraan_ru4006360576_batterij"
      | "binary_sensor.thermostaatkraan_ru4006360576_connectiestatus"
      | "binary_sensor.woonkamer_vermogen"
      | "binary_sensor.woonkamer_connectiviteit"
      | "binary_sensor.woonkamer_overlay"
      | "binary_sensor.woonkamer_raam"
      | "binary_sensor.woonkamer_vroege_start"
      | "device_tracker.sander_s_telefoo"
      | "device_tracker.sander_s_tablet"
      | "device_tracker.ebru_s_telefoon"
      | "device_tracker.sander_s_telefoon"
      | "device_tracker.ebru_mobiel"
      | "device_tracker.onze_tablet"
      | "sensor.sander_en_ebru_woning_buitentemperatuur"
      | "sensor.sander_en_ebru_woning_zonne_energie_percentage"
      | "sensor.sander_en_ebru_woning_weersomstandigheden"
      | "sensor.sander_en_ebru_woning_tado_mode"
      | "sensor.sander_en_ebru_woning_geo_fencing_mode"
      | "sensor.sander_en_ebru_woning_automatisch_geo_fencing"
      | "sensor.woonkamer_temperatuur"
      | "sensor.woonkamer_luchtvochtigheid"
      | "sensor.woonkamer_tado_mode"
      | "sensor.woonkamer_verwarmen"
      | "media_player.jbl_bar"
      | "climate.woonkamer"
      | "binary_sensor.thermostaatkraan_br3566876416_connectiestatus"
      | "media_player.all_speakers"
      | "media_player.shield"
      | "media_player.hk_citation_one"
      | "media_player.slaapkamer_streamer"
      | "media_player.woonkamer_speaker"
      | "media_player.slaapkamer_hub"
      | "media_player.xgimi_halo"
      | "media_player.xgimi_halo_2"
      | "remote.xgimi_halo"
      | "remote.halo"
      | "script.watch_beamer";
  }
}
